import { TodoItem } from './../interfaces/todo-item';
import { Injectable } from '@angular/core';

const storageKey = 'localStorageTodoList';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  saveList(todoList: TodoItem[]) {
    localStorage.setItem(storageKey, JSON.stringify(todoList));
  }

  loadList() {
    return JSON.parse(localStorage.getItem(storageKey)) || [];
  }
}
