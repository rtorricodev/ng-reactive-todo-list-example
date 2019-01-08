import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Todo } from './../../models/todo.model';
import { AppState } from './../../app.state';
import * as TodosActions from '../../actions/todo.actions';


@Component({
  selector: 'app-todo-read',
  templateUrl: './todo-read.component.html',
  styleUrls: ['./todo-read.component.scss']
})
export class TodoReadComponent implements OnInit {

  todos: Observable<Todo[]>;

  constructor(
    private store: Store<AppState>
  ) { 
    this.todos = store.select('todo');
  }

  deleteTodo(index) {
    this.store.dispatch(new TodosActions.RemoveTodo(index));
  }

  ngOnInit() {
  }

}
