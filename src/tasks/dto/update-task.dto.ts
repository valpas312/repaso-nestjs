import { IsString, IsBoolean, IsOptional, MinLength, MaxLength } from 'class-validator';
import { Task } from "generated/prisma";

export class UpdateTaskDto implements Partial<Omit<Task, 'id'>> {
    @IsOptional()
    @IsString()
    @MinLength(3)
    @MaxLength(50)
    title?: string;

    @IsOptional()
    @IsString()
    @MinLength(3)
    @MaxLength(200)
    description?: string;

    @IsOptional()
    @IsBoolean()
    completed?: boolean;
}