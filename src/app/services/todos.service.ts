import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todos = [
    {userId: 3, title: 'Learn HTML', complited: true},
    {userId: 2, title: 'Learn CSS', complited: false},
    {userId: 1, title: 'Learn JS', complited: true},
    {userId: 0, title: 'Learn Angular', complited: false},
  ];

  constructor() { }

  getAll(): any {
    return this.todos;
  }
}
