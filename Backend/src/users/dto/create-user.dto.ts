import { IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";

export class CreateUserDto {
    @IsOptional()
    @IsNumber()
    role_id: number;
    @IsNotEmpty()
    @IsString()
    role: string;

    @IsNotEmpty()
    @IsNumber()
    organization_id: number;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
   @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(15)
    mobile: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}
