import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoList2Component } from './to-do-list2.component';

describe('ToDoList2Component', () => {
  let component: ToDoList2Component;
  let fixture: ComponentFixture<ToDoList2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoList2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
