import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('tasks')
@ApiBearerAuth('access-token')
@UseGuards(JwtAuthGuard)
@Controller('tasks')
export class TasksController {
    tasksService:TasksService

    constructor(tasksService:TasksService){
        this.tasksService = tasksService
    }

    // Tambien se puede hacer asi:
    // constructor(private tasksService:TasksService){}

    @Get('/')
    async getAllTasks() {
        return `Tasks: ${this.tasksService.getTasks()}`;
    }

    @Get('/:id')
    async getTaskById(@Param('id', ParseIntPipe) id: number) {
        return this.tasksService.getTaskById(id);
    }

    @Post('/')
    async createTask(@Body() task: CreateTaskDto) {
        return this.tasksService.createTask(task);
    }

    @Put('/:id')
    async updateTask(@Param('id', ParseIntPipe) id: number, @Body() task: UpdateTaskDto) {
        return this.tasksService.updateTask(id, task);
    }

    @Delete('/:id')
    async deleteTask(@Param('id', ParseIntPipe) id: number) {
        return this.tasksService.deleteTask(id);
    }

    // @UsePipes(new ValidationPipe())
    // Otra forma de usar pipes, pero es mejor hacerlo globalmente en main.ts
}
