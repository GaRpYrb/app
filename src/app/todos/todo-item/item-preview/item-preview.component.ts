import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-preview',
  templateUrl: './item-preview.component.html',
  styleUrls: ['./item-preview.component.css']
})
export class ItemPreviewComponent implements OnInit {
  @Input() todo;
  @Output() removeTodoEvent = new EventEmitter();
  @Output() updateTodoEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
