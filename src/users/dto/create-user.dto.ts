import { IsOptional, IsString, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString()
  id: string; // el sub de Auth0 (ej: google-oauth2|xxxxx)

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  name?: string;
}
