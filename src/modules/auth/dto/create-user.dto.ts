import { IsString, Matches, MaxLength, MinLength } from "class-validator";

export class createUserDto {
    @IsString()
    @MinLength(8)
    @MaxLength(50)
    userId : string;

    @IsString()
    @MinLength(2)
    @MaxLength(100)
    name : string;
    
    @IsString()
    @MinLength(4)
    @MaxLength(100)
    email : string;

    @IsString()
    @MinLength(4)
    @MaxLength(50)
    @Matches(/^[a-zA-Z0-9]*$/,{
        message:"Password can have only english and number"
    })
    password : string;
}