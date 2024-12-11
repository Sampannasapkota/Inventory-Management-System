import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private jwtService: JwtService,
  ) {}

  //login ko laagi

  async login(loginDto: LoginDto) {
    const user = await this.prismaService.user.findFirst({
      where: {
        OR: [
          {
            email: loginDto.username,
          },
          {
            mobile: loginDto.username,
          },

        ],
      },
      include:{
        role:true,
        organization: true,
      }
    });
    if(!user){
        throw new NotFoundException("Unable to find user");

    }
  
    const token = await this.jwtService.signAsync(user);

    return{
        token,
    }
  }


  //register ko laagi
  async register(registerDto: RegisterDto){
    const userService= new UsersService(this.prismaService);
    const user= await userService.create(registerDto);
    const token= await this.jwtService.signAsync(user);
    return{
      token,
    };
  }
  async getUserProfile(userId: number) {
    const user = await this.prismaService.user.findFirst({where:{id: userId}});
    if(!user) throw new NotFoundException();
    return user;
    
  }
}

