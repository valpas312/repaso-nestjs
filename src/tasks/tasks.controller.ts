import { Controller, Get, Post, Put, Delete, Patch, Body, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
import type { Task } from './tasks.service';

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
    createTask(@Body() task: Task) {
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
