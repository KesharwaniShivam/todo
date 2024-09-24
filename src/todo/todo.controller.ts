import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/todo.dto';
import { Todo } from './entities/todo.entity';

@Controller('todo')
export class TodoController {
    constructor(private readonly todoService : TodoService){}

    @Get()
    allTodos(): Promise<Todo[]>{
        return this.todoService.allTodos();
    }

    @Get(':id')
    findone(@Param('id') id : number): Promise<Todo>{
        return this.todoService.findone(id)
    }

    @Post()
    createTodo(@Body() createTodo : Partial<Todo> ): Promise<Todo>{
        return this.todoService.createTodo(createTodo);
    }

    @Patch(':id')
    updateTodo(@Param('id') id: number, @Body() updateTodo : Partial<Todo>): Promise<Todo>{
        return this.todoService.updateTodo(id, updateTodo)
    }

    @Delete(':id')
    removeTodo(@Param('id') id: number): Promise<void>{
        return this.todoService.removeTodo(id);
    }
}
