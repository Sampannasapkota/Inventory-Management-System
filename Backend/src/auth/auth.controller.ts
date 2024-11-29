import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { Public } from 'src/helpers/public';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

@Public()
@Post("login")
async login(@Body() loginDto: LoginDto){
  return this.authService.login(loginDto);
}

@Public()
@Post("register")
async register(@Body() registerDto: RegisterDto){
  return this.authService.register(registerDto);
}
}
