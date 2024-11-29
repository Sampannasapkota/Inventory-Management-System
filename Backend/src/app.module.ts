import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RolesModule } from './roles/roles.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { OrganizationModule } from './organization/organization.module';
import { UsersModule } from './users/users.module';
// import { ItemsModule } from './items/items.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ItemsModule } from './items/items.module';

import { CustomerVendorsModule } from './customer-vendors/customer-vendors.module';

@Module({
  imports: [RolesModule, PrismaModule, OrganizationModule, UsersModule,  AuthModule, ConfigModule.forRoot(), ItemsModule, CustomerVendorsModule],//ItemsModule pani hunxa
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
