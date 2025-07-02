import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { AuthGuard } from './guards/auth/auth.guard';
import { JwtService } from '@nestjs/jwt';

async function bootstrap() {
  //app instance is created here
  const app = await NestFactory.create(AppModule, { cors: true });

  //all middlewares are registered here
  app.useGlobalPipes(new ValidationPipe());

  //jwt paxadi yo halne
  app.useGlobalGuards(new AuthGuard(new JwtService(), new Reflector()));

  //application start
  await app.listen(8000);
}
bootstrap();
