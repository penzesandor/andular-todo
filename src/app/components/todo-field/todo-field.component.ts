import { TodoDataService } from './../../services/todo-data.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-field',
  templateUrl: './todo-field.component.html',
  styleUrls: ['./todo-field.component.scss'],
})
export class TodoFieldComponent implements OnInit {
  @Output() addTodo: EventEmitter<string> = new EventEmitter();
  todoTitle: '';

  constructor(private todoDataService: TodoDataService) {}

  ngOnInit(): void {}

  addTodoItem(title: string) {
    this.addTodo.emit(title);
    this.todoTitle = '';
  }
}
