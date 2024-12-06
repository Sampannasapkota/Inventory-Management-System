import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { RolesService } from 'src/roles/roles.service';
import { OrganizationService } from 'src/organization/organization.service';
import { capitalizeFirstLetterOfEachWordInAPhrase } from 'src/helpers/capitalize';
import { hash } from 'bcrypt';

@Injectable()
export class UsersService {
  constructor (private prismaService: PrismaService) {}
  async create(createUserDto: CreateUserDto) {

    const roleService = new RolesService(this.prismaService);
    const organizationService = new OrganizationService(this.prismaService);

    await roleService.findOne(createUserDto.role_id);
    await organizationService.findOne(createUserDto.organization_id);

    const roleObj= await this.prismaService.role.findFirst({
      where: {name: createUserDto.role},

    });

    if(!roleObj){
      throw new NotFoundException(`Unable to find the role ${createUserDto.role}`,);
    }

    createUserDto.role_id = roleObj.id;

    const {role, ...rest}= createUserDto;

    rest.name= capitalizeFirstLetterOfEachWordInAPhrase(rest.name)

    if(await this.checkIfEmailExist(rest.email)){
      throw new BadRequestException("Email already taken");

    }
    if(await this.checkIfMobileExist(rest.mobile)){
      throw new BadRequestException("Mobile already taken");

    }
    rest.password= await hash(rest.password, 10);
    return this.prismaService.user.create({data: rest});
  }


  findAll() {
    return this.prismaService.user.findMany();
  }

 async findOne(id: number) {
    return this.getUserById(id);
  }

 async update(id: number, updateUserDto: UpdateUserDto) {
  
    updateUserDto.name= capitalizeFirstLetterOfEachWordInAPhrase(updateUserDto.name);
    if(updateUserDto.name){
      updateUserDto.name= capitalizeFirstLetterOfEachWordInAPhrase(updateUserDto.name);
    }

        if(!await this.checkIfUserExist(updateUserDto.name, id)){
          throw new BadRequestException("This user already exists");
        }
       
        const {role, ...rest}= updateUserDto;

        if(!(await this.checkIfEmailExist(updateUserDto.email, id)))
          {
          throw new BadRequestException(`User ${updateUserDto.email} has already been taken`);
        }

        if(!(await this.checkIfMobileExist(updateUserDto.mobile, id)))
          {
          throw new BadRequestException(`User ${updateUserDto.mobile} has already been taken`);
        }
    
    
    
        rest.name= capitalizeFirstLetterOfEachWordInAPhrase(updateUserDto.name)
        return this.prismaService.user.update({where: {id}, data: rest,})
  }

  async remove(id: number) {
    await this.getUserById(id);
    return this.prismaService.user.delete({where: {id}});
     
  }





  //private function for refactoring

  private async  checkIfUserExist(name: string, id?: number, ):  Promise<boolean> {
    const user = await this.prismaService.user.findUnique({
      where: {id,}
    });
    if (id) {
      return user ? user.id === id : true;
    }
    return !!user;
  }

  private async  checkIfEmailExist(email: string, id?: number, ):  Promise<boolean> {
    const user = await this.prismaService.user.findUnique({
      where: {email,}
    });
    if (id) {
      return user ? user.id === id : true;
    }
    return !!user;
  }
  //function



  private async  checkIfMobileExist(mobile: string, id?: number, ):  Promise<boolean> {
    const user = await this.prismaService.user.findUnique({
      where: {mobile,}
    });
    if (id) {
      return user ? user.id === id : true;
    }
    return !!user;
  }

  private async getUserById(id: number){
    const user = await this.prismaService.user.findFirst({where: {id}});
      if(!user){
        throw new NotFoundException(`User with id ${id} does not exist`);
      }
      return user;
    }
}

