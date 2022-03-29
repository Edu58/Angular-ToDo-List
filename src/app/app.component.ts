import { Component } from '@angular/core';
import { ToDo } from './models/todo.model';
import { ToDoList } from './models/todolist.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Angular-Todolist';

  private List: ToDoList = new ToDoList('Eddy', [
    new ToDo( 'Cook', true ),
    new ToDo( 'Run'),
    new ToDo( 'Milk', true ),
    new ToDo( 'Play' ),
    new ToDo( 'Play Guitar' ),
    new ToDo('Code'),
  ] )
  
  get username (): string {
    return this.List.user
  }

  get toDosCount ():number {
    return this.items.length
  }

  get items (): readonly ToDo[] {
    return this.List.todos.filter((item: ToDo): boolean => !item.complete)
  }
}
