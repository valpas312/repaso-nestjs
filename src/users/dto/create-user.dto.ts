import { IsOptional, IsString, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString()
  userId: string; // el sub de Auth0 (ej: google-oauth2|xxxxx)
}
