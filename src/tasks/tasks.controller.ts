import { Controller, Get, Post, Put, Delete, Patch, Body, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
    tasksService:TasksService

    constructor(tasksService:TasksService){
        this.tasksService = tasksService
    }

    // Tambien se puede hacer asi:
    // constructor(private tasksService:TasksService){}

    @Get('/')
    getAllTasks() {
        return `Tasks: ${this.tasksService.getTasks()}`;
    }

    @Get('/:id')
    getTaskById(@Param('id') id: string) {
        return this.tasksService.getTaskById(parseInt(id));
    }

    @Post('/')
    // @UsePipes(new ValidationPipe())
    // Otra forma de usar pipes, pero es mejor hacerlo globalmente en main.ts
    createTask(@Body() task: CreateTaskDto) {
        return this.tasksService.createTask(task);
    }

    @Put('/:id')
    updateTask() {
        return this.tasksService.updateTask();
    }

    @Delete('/:id')
    deleteTask() {
        return this.tasksService.deleteTask();
    }

    @Patch('/:id')
    patchTask() {
        return this.tasksService.patchTask();
    }

}
