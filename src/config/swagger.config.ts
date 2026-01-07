import { DocumentBuilder } from '@nestjs/swagger';

export function getSwaggerConfig() {
  return new DocumentBuilder()
    .setTitle('Auth app API')
    .setDescription('It is auth app API documentation')
    .setVersion('1.0.0')
    .addBearerAuth()
    .build();
}
