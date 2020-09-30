import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { RegistrationComponent } from './registration/registration.component';
import { ItemPreviewComponent } from './todos/todo-item/item-preview/item-preview.component';
import { ItemUpdateComponent } from './todos/todo-item/item-update/item-update.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/todos',
  },
  {
    path: 'users',
    component: RegistrationComponent,
  },
  {
    path: 'todos',
    component: TodosComponent,
    children: [
      {path: '', component: ItemPreviewComponent},
      {path: ':id', component: ItemUpdateComponent},
    ],
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/todos',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
