import { OrganizationType } from "@prisma/client";
import { IsNotEmpty, IsOptional, IsString , IsEnum, Max, MaxLength} from "class-validator";

export class CreateOrganizationDto {
    @IsNotEmpty()
    @IsString()
    name : string;

    @IsNotEmpty()
    @IsEnum(OrganizationType)
    type: OrganizationType;

    @IsOptional()
    @IsString()
    address: string;

    @IsOptional()
    @IsString()
    @MaxLength(15)
    phone: string

}
