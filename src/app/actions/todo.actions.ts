import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Todo } from './../models/todo.model';

export const ADD_TODO = '[Todo] Add';
export const REMOVE_TODO = '[Todo] Remove';

export class AddTodo implements Action {
    readonly  type =  ADD_TODO;
    constructor(public payload: Todo){}
}

export class RemoveTodo implements Action {
    readonly type = REMOVE_TODO;
    constructor(public payload: number){}
}

export type Actions = AddTodo | RemoveTodo; 