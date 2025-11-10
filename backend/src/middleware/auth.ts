import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export interface AuthRequest extends Request {
  adminId?: string;
}

export const authenticateToken = (req: AuthRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Token de acesso não fornecido' });
  }

  jwt.verify(token, process.env.JWT_SECRET || '', (err, decoded: any) => {
    if (err) {
      return res.status(403).json({ message: 'Token inválido' });
    }
    req.adminId = decoded.adminId;
    next();
  });
};

