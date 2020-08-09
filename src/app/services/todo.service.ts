//Injectable allow us to inject the service to
//a component via the constructor
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//Reactive Observables import
import { Observable } from "rxjs";
import { Todo } from "../models/Todo";

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  //api URL you can check the content by place this link to
  // your browser
  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit:string = '?_limit=5';

  //Inject the module
  constructor(private http:HttpClient) { }

  // This is going to return an Observable so we
  // need to specify the type
  getTodos():Observable<Todo[]> {
    //get request to the JSONPlaceHolder
    //specify the "List" type
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }

  //Toggle Completed
  // Why <any>? this because the API each todo has an ID
  // our model no, so Observable<Todo> isn't correct
  toggleCompleted(todo:Todo):Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }

  // Delete
  deleteTodo(todo:Todo):Observable<Todo> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }

  // Add
  addTodo(todo:Todo):Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
  }

}
