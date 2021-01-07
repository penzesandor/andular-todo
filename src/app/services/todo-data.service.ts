import { Injectable } from '@angular/core';
import { TodoItem } from './../interfaces/todo-item';

@Injectable({
  providedIn: 'root',
})
export class TodoDataService {
  todoList: TodoItem[] = [];

  constructor() {}

  generateId() {
    if (!this.todoList) {
      return 0;
    }

    let maxId = this.todoList.reduce(
      (maxId, todo) => (todo.id > maxId ? todo.id : maxId),
      0
    );
    return ++maxId;
  }

  addTodoItem(title: string) {
    if (!title) {
      return null;
    }

    const todoItem = {
      id: this.generateId(),
      title: title,
    };
    this.todoList.push(todoItem);
  }

  getTodoList() {
    return this.todoList;
  }

  removeTodoItem(id: number) {
    const index = this.todoList.findIndex((todoItem) => todoItem.id === id);
    index !== -1 && this.todoList.splice(index, 1);
  }
}
