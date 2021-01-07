import { Injectable } from '@angular/core';
import { TodoItem } from './../interfaces/todo-item';

@Injectable({
  providedIn: 'root',
})
export class TodoDataService {
  todoList: TodoItem[] = [];

  constructor() {
    const defaultTodoList = [
      {
        id: 1,
        title: 'do the shopping',
        completed: false,
      },
      {
        id: 2,
        title: 'wash the car',
        completed: false,
      },
    ];
    this.todoList = defaultTodoList;
  }

  generateId(todos: TodoItem[]) {
    if (!todos) {
      return 0;
    }

    let maxId = todos.reduce(
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
      id: this.generateId(this.todoList),
      title: title,
      completed: false,
    };
    this.todoList.push(todoItem);
  }

  getTodoList() {
    return this.todoList;
  }

  removeTodoItem(todoItem: TodoItem) {
    const index = this.todoList.indexOf(todoItem);
    this.todoList.splice(index, 1);
  }
}
