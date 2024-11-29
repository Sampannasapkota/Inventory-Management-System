import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CustomerVendorsService } from './customer-vendors.service';
import { CreateCustomerVendorDto } from './dto/create-customer-vendor.dto';
import { UpdateCustomerVendorDto } from './dto/update-customer-vendor.dto';

@Controller('customer-vendors')
export class CustomerVendorsController {
  constructor(private readonly customerVendorsService: CustomerVendorsService) {}

  @Post()
  create(@Body() createCustomerVendorDto: CreateCustomerVendorDto) {
    return this.customerVendorsService.create(createCustomerVendorDto);
  }

  @Get()
  findAll() {
    return this.customerVendorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerVendorsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustomerVendorDto: UpdateCustomerVendorDto) {
    return this.customerVendorsService.update(+id, updateCustomerVendorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerVendorsService.remove(+id);
  }
}
