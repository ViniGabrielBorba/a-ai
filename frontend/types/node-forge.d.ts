declare module 'node-forge' {
  export namespace pki {
    export function publicKeyFromPem(pem: string): PublicKey;
  }

  export interface PublicKey {
    encrypt(data: string, scheme?: string, options?: any): string;
  }

  export namespace md {
    export namespace sha256 {
      export function create(): MessageDigest;
    }
  }

  export interface MessageDigest {
    update(data: string): void;
    digest(): string;
  }

  export namespace mgf {
    export namespace mgf1 {
      export function create(md: MessageDigest): any;
    }
  }

  export namespace util {
    export function encode64(data: string): string;
    export function decode64(data: string): string;
  }
}

