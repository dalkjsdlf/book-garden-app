import { IsString, Matches, MaxLength, Min, MinLength } from "class-validator";


export class AuthCredentialDto {
    @IsString()
    @MinLength(4)
    @MaxLength(50)
    userId : string;

    @IsString()
    @MinLength(4)
    @MaxLength(50)
    @Matches(/^[a-zA-Z0-9]*$/,{
        message:"Password can have only english and number"
    })
    password : string;
}