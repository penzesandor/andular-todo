import { Component, OnInit } from '@angular/core';
import { TodoDataService } from './../../services/todo-data.service';
import { TodoItem } from './../../interfaces/todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todoList: TodoItem[];

  constructor(private todoDataService: TodoDataService) {}

  ngOnInit(): void {
    this.todoList = this.todoDataService.getTodoList();
  }

  addTodoItem(title: string) {
    this.todoDataService.addTodoItem(title);
  }

  removeTodoItem(id: number) {
    this.todoDataService.removeTodoItem(id);
  }
}
