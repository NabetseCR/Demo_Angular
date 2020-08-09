import { Component, OnInit } from '@angular/core';
// Call the todo.service component
import { TodoService } from "../../services/todo.service";
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  //Todos "stored in the service"
  todos:Todo[];

  //Inject service
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    //OnInit
    //Its an asyncronous call we need to use subscribe
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  //Implementation
  deleteTodo(todo:Todo):void {
    // Delete it from UI
    this.todos = this.todos.filter(t => t.id !== todo.id);
    // Delete it from API
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo:Todo):void {
    // Add it from API
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    });
  }

}
