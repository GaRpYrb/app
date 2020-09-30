import { AfterViewInit, Component, ElementRef, Inject, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-item-update',
  templateUrl: './item-update.component.html',
  styleUrls: ['./item-update.component.css']
})
export class ItemUpdateComponent implements OnInit, AfterViewInit {
  updateForm: FormGroup;
  @ViewChild('text') elRef: ElementRef;
  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ItemUpdateComponent>,
    ){
    this.updateForm = fb.group({
      title: [''],
      complited: [''],
    });
  }

  ngOnInit(): void {
    if (this.updateForm) {
      this.updateForm.get('title').setValue(this.data.todo.title);
      this.updateForm.get('complited').setValue(this.data.todo.complited);
    }
  }

  onSubmit(): void {
    this.dialogRef.close({
      value: this.updateForm.value,
      id: this.data.todo.userId,
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }

  ngAfterViewInit(): void {
    this.elRef.nativeElement.focus();
  }

}
