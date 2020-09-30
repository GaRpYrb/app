import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTodoComponent } from './todos/create-todo/create-todo.component';
import { TodoItemComponent } from './todos/todo-item/todo-item.component';
import { ItemPreviewComponent } from './todos/todo-item/item-preview/item-preview.component';
import { ItemUpdateComponent } from './todos/todo-item/item-update/item-update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { TodosComponent } from './todos/todos.component';
import { AuthService } from './services/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    CreateTodoComponent,
    TodoItemComponent,
    ItemPreviewComponent,
    ItemUpdateComponent,
    RegistrationComponent,
    TodosComponent,
    CreateTodoComponent,
    ItemUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (authService: AuthService) => {
          return () => {
              authService.initAuth();
          };
      },
      multi: true,
      deps: [AuthService]
  },
  ],
  entryComponents: [
    ItemUpdateComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
