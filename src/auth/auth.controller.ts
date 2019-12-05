import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { User } from './user.entity';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
  ) {}

  @Post('/signup')
  signUp(@Body(ValidationPipe) authDto: AuthDto): Promise<User> {
    return this.authService.signUp(authDto);
  }

  @Post('/signin')
  signIn(@Body(ValidationPipe) authDto: AuthDto) {
    return this.authService.signIn(authDto);
  }
}
