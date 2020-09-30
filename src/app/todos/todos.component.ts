import { Component } from '@angular/core';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos = [];
  constructor(private todosService: TodosService) {
    this.todos = todosService.getAll();
  }

  createTodo(event): void {
  const newTodo = {
    title: event,
    userId: this.todos.length,
    complited: false,
  };
  this.todos = [newTodo, ...this.todos];
  }

  removeTodo(id): void {
    this.todos = this.todos.filter((todo) => todo.userId !== id);
  }

  updateTodo(event): void {
    const todoIndex = this.todos.findIndex((todo) => todo.userId === event.id);
    this.todos[todoIndex].title = event.value.title;
    this.todos[todoIndex].complited = event.value.complited;
  }

}
