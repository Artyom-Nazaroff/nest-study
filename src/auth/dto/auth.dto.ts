import { ApiProperty } from '@nestjs/swagger';

export class AuthResponse {
  @ApiProperty({
    description: 'JWT access token',
    example: 'sdf234ergdg54erfg456y54tgefg',
  })
  accessToken: string;
}
