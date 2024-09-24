import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dto/todo.dto';

@Injectable()
export class TodoService {
    constructor(
        @InjectRepository(Todo)
        private todorepo : Repository<Todo>,
     ){}

     async allTodos(): Promise<Todo[]>{
        return this.todorepo.find();
     }
     async findone(id : number): Promise<Todo>{
        return this.todorepo.findOneBy({id});
     }
     async createTodo(todoData : Partial<Todo>) : Promise<Todo>{
        const newTodo = this.todorepo.create(todoData);
        return this.todorepo.save(newTodo);
     }
     async updateTodo(id : number, updatedData : Partial<Todo>): Promise<Todo>{
        await this.todorepo.update(id, updatedData);
        return this.todorepo.findOne({where: {id}});
     }
     async removeTodo(id : number): Promise<void>{
        await this.todorepo.delete(id);
     }
}
