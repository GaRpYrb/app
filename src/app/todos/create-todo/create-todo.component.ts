import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {
  title: FormControl;
  @Output() createTodoEvent = new EventEmitter();
  constructor(private fb: FormBuilder) {
    this.title = new FormControl();
  }

  ngOnInit(): void {
  }

  createTodo(): void {
    this.createTodoEvent.emit(this.title.value);
    this.title.reset();
  }

}
