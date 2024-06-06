import { Component, EventEmitter, Input, Output,input } from '@angular/core';
import { Todo } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  todo = input<Todo>()    //using signal here.
  // @Input() todo!: Todo;
  @Output () delete = new EventEmitter<number>();
  @Output() toggle = new EventEmitter<Todo>();

  onDelete() {
    this.delete.emit(this.todo()!.id);
  }

  onToggle() {
    this.toggle.emit(this.todo());
  }

}
