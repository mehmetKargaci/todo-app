import { Injectable } from '@angular/core';


export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({  providedIn: 'root'})
export class TodoService {
  private todos: Todo[] = [];
  

  getTodos(): Todo[]{
    return this.todos;
  }

  addTodo(title: string):void {
    const newTodo: Todo ={
      id: Date.now(),
      title,
      completed: false
    };
    this.todos.push(newTodo);
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  toggleCompletion(todo:Todo): void {
  todo.completed = !todo.completed;
    
  }  
}
