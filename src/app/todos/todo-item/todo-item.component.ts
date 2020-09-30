import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ItemUpdateComponent } from './item-update/item-update.component';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  isEdit = false;
  @Input() todo;
  @Output() removeTodoEvent = new EventEmitter();
  @Output() updateTodoEvent = new EventEmitter();
  constructor(
    public dialog: MatDialog,
    private router: Router,
    ) { }

  removeItem(event): void {
    this.removeTodoEvent.emit(event);
  }

  updateTodo(): void {
    const dialogRef = this.dialog.open(ItemUpdateComponent, {
      data: {
        todo: this.todo
      }
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.updateTodoEvent.emit(result);
      }
      this.router.navigateByUrl('/todos');
    });
  }

}
