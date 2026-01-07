import { ConfigService } from '@nestjs/config';
import type { JwtModuleOptions } from '@nestjs/jwt';

export function getJwtConfig(configService: ConfigService): JwtModuleOptions {
  return {
    secret: configService.getOrThrow<string>('JWT_SECRET'),
    signOptions: {
      // Используем симметричный алгоритм, т.к. секрет — строка, а не пара ключей
      algorithm: 'HS256',
    },
    verifyOptions: {
      algorithms: ['HS256'],
      ignoreExpiration: false,
    },
  };
}
