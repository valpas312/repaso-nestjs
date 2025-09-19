import { IsString, IsBoolean, IsOptional, IsNumber, IsNotEmpty, MinLength } from 'class-validator';

export class UpdateTaskDto {
    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsString()
    @IsOptional()
    @MinLength(2)
    title?: string;

    @IsString()
    @IsOptional()
    @MinLength(2)
    description?: string;

    @IsBoolean()
    @IsOptional()
    completed?: boolean;
}