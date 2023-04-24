

import { IsString, IsNotEmpty } from 'class-validator';
// Validator use

export class CarMakerDTO {
    @IsNotEmpty()
    @IsString()
    en_name:string

    @IsNotEmpty()
    @IsString()
    ru_name:string

    @IsNotEmpty()
    @IsString()
    kr_name:string
}

export type CarMakerDto = {
    en_name:string,
    ru_name:string,
    kr_name:string
}