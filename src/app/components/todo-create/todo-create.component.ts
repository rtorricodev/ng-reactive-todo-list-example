import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import * as TodosActions from '../../actions/todo.actions';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.scss']
})

export class TodoCreateComponent implements OnInit {

  constructor(
    private store: Store<AppState>
  ) { }

  addTodo(content) {
    if (content !='') {
      this.store.dispatch(
        new TodosActions.AddTodo({ content: content })
      );
    }
  }

  ngOnInit() {
  }

}
