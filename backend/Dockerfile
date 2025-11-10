# Dockerfile para Backend - Multi-stage build
FROM node:18-alpine AS builder

WORKDIR /app

# Copiar arquivos de dependências
COPY package*.json ./
COPY tsconfig.json ./

# Instalar todas as dependências (incluindo devDependencies para build)
RUN npm ci

# Copiar código fonte
COPY src ./src

# Compilar TypeScript
RUN npm run build

# Stage de produção
FROM node:18-alpine

WORKDIR /app

# Copiar arquivos de dependências
COPY package*.json ./

# Instalar apenas dependências de produção
RUN npm ci --only=production && npm cache clean --force

# Copiar código compilado do stage anterior
COPY --from=builder /app/dist ./dist

# Expor porta (Fly.io e outras plataformas usam PORT via variável de ambiente)
# A porta será definida pela variável de ambiente PORT
EXPOSE 3001

# Health check - usar a porta da variável de ambiente ou padrão 3001
HEALTHCHECK --interval=30s --timeout=5s --start-period=40s --retries=3 \
  CMD node -e "const port = process.env.PORT || 3001; require('http').get('http://localhost:' + port + '/api/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)}).on('error', () => process.exit(1))"

# Comando para iniciar
CMD ["npm", "start"]
