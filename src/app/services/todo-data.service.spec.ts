import { TestBed, inject } from '@angular/core/testing';

import { TodoDataService } from './todo-data.service';

describe('TodoDataService', () => {
  let service: TodoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoDataService],
    });
  });

  it('should be created', inject(
    [TodoDataService],
    (service: TodoDataService) => {
      expect(service).toBeTruthy();
    }
  ));
});

describe('generateId function', () => {
  it('should return a new generated id', inject(
    [TodoDataService],
    (service: TodoDataService) => {
      const todoListLength = service.getTodoList().length;
      const generatedId = service.generateId();
      expect(todoListLength + 1).toEqual(generatedId);
    }
  ));
});

describe('getTodoList function', () => {
  it('should return zero by default (empty list)', inject(
    [TodoDataService],
    (service: TodoDataService) => {
      expect(service.getTodoList().length).toEqual(0);
    }
  ));
});

describe('addTodoItem function', () => {
  it('should todos to the todo list', inject(
    [TodoDataService],
    (service: TodoDataService) => {
      service.addTodoItem('do the shopping');
      expect(service.getTodoList().length).toEqual(1);

      service.addTodoItem('do the cooking');
      expect(service.getTodoList().length).toEqual(2);
    }
  ));
});

describe('removeTodoItem function', () => {
  it('should not remove any todo for a non-exiting id', inject(
    [TodoDataService],
    (service: TodoDataService) => {
      service.addTodoItem('do the cleaning');
      service.removeTodoItem(100);

      expect(service.getTodoList().length).toEqual(1);
    }
  ));

  it('should remove the appropriate todo from the todo list', inject(
    [TodoDataService],
    (service: TodoDataService) => {
      const idToRemove = 1;
      service.addTodoItem('walk the dog'); // Auto generated id is 1
      service.addTodoItem('wash the car'); // Auto generated id is 2
      service.removeTodoItem(idToRemove);

      let deletedItem = service
        .getTodoList()
        .findIndex((todoItem) => todoItem.id === 1);

      expect(service.getTodoList().length).toEqual(1);
      expect(deletedItem).toBe(-1);
    }
  ));
});
