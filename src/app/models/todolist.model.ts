import { ToDo } from "./todo.model";

export class ToDoList {
    
    constructor ( public user: string, private todoItems: ToDo[] ) { }
    
    get todos (): readonly ToDo[] {
        return this.todoItems
    }

    addTodo (todo: string): void {
        this.todoItems.push(new ToDo(todo))
    }
}