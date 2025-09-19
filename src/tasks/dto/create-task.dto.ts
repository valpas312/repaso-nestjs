import { IsString, IsBoolean, IsOptional, IsNumber, IsNotEmpty, MinLength } from 'class-validator';

export class CreateTaskDto {
    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    title: string;

    @IsString()
    @IsOptional()
    @MinLength(2)
    description?: string;

    @IsBoolean()
    @IsNotEmpty()
    completed: boolean;
}