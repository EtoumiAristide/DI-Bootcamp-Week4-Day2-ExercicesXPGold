import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoItemDetailComponent } from './to-do-item-detail/to-do-item-detail.component';
import { ToDoList2Component } from './to-do-list2/to-do-list2.component';

const routes: Routes = [
  { path: '', component: ToDoList2Component},
  { path: 'item/:id', component: ToDoItemDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
