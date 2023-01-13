import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { DraggableDirective } from './directives/draggable.directive';
import { CategoryFilterDirective } from './directives/category-filter.directive';
import { ToDoList2Component } from './to-do-list2/to-do-list2.component';
import { ToDoItemDetailComponent } from './to-do-item-detail/to-do-item-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProduitComponent,
    ToDoListComponent,
    DraggableDirective,
    CategoryFilterDirective,
    ToDoList2Component,
    ToDoItemDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
