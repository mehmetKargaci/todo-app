import { Component, OnInit, signal } from '@angular/core';
import { TodoService, Todo } from '../../services/todo.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent  implements OnInit{
  status : string[] = [];  
  newTitle: string = '';

  constructor(public todoService: TodoService) { }  

  ngOnInit(): void { 

  } 

  addTodo() {
    if (this.newTitle) {
      this.todoService.addTodo(this.newTitle);
      this.newTitle = '';
    }
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id);
  }

  toggleCompletion(todo:Todo) {
    this.todoService.toggleCompletion(todo);
  }  

}
