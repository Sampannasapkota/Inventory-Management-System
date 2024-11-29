import { Module } from '@nestjs/common';
import { CustomerVendorsService } from './customer-vendors.service';
import { CustomerVendorsController } from './customer-vendors.controller';

@Module({
  controllers: [CustomerVendorsController],
  providers: [CustomerVendorsService],
})
export class CustomerVendorsModule {}
