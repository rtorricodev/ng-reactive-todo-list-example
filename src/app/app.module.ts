import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoCreateComponent } from './components/todo-create/todo-create.component';
import { TodoReadComponent } from './components/todo-read/todo-read.component';

import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/todo.reducer';



@NgModule({
  declarations: [
    AppComponent,
    TodoCreateComponent,
    TodoReadComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      todo: reducer
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
