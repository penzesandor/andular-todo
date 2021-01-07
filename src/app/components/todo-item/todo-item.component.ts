import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { TodoItem } from './../../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todoItem: TodoItem;
  @Output() removeTodo: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  removeTodoItem() {
    this.removeTodo.emit(this.todoItem.id);
  }
}
