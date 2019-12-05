import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthDto } from './dto/auth.dto';
import { User } from './user.entity';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private  jwtService: JwtService,
  ) {}

  async signUp(authDto: AuthDto): Promise<User> {
    return this.userRepository.signUp(authDto);
  }

  async signIn(authDto: AuthDto): Promise<{ accessToken: string }> {
    const username = await this.userRepository.validateUserPassword(authDto);
    if (!username) {
      throw new UnauthorizedException('Invalid username or password')
    }
    const payload: JwtPayload = { username };
    const accessToken = await this.jwtService.sign(payload);

    return  {accessToken};
  }
}
