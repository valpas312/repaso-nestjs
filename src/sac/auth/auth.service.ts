import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthPrismaService } from 'src/prisma/auth/auth.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private prisma: AuthPrismaService, private jwtService: JwtService) {}

  async register(email: string, password: string, name?: string) {
    const existingUser = await this.prisma.usuario.findUnique({ where: { email } });
    if (existingUser) throw new UnauthorizedException('El usuario ya existe');

    const hashed = await bcrypt.hash(password, 10);
    const user = await this.prisma.usuario.create({
      data: { email, password: hashed, name },
    });

    return this.generateToken(user);
  }

  async login(email: string, password: string) {
    const user = await this.prisma.usuario.findUnique({ where: { email } });
    if (!user) throw new UnauthorizedException('Usuario no encontrado');

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) throw new UnauthorizedException('Contraseña incorrecta');

    return this.generateToken(user);
  }

  private generateToken(user: any) {
    const payload = { sub: user.id, email: user.email };
    return {
      access_token: this.jwtService.sign(payload),
      user: { id: user.id, email: user.email, name: user.name },
    };
  }
}
