import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthDto } from './dto/auth.dto';
import { User } from './user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async signUp(authDto: AuthDto): Promise<User> {
    return this.userRepository.signUp(authDto);
  }

  async signIn(authDto: AuthDto) {
    const username = await this.userRepository.validateUserPassword(authDto);
    if (!username) {
      throw new UnauthorizedException('Invalid username or password')
    }
  }
}
