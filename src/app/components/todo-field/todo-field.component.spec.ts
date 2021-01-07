import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFieldComponent } from './todo-field.component';

describe('TodoFieldComponent', () => {
  let component: TodoFieldComponent;
  let fixture: ComponentFixture<TodoFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
