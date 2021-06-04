import { Component } from '@angular/core';
import { model, TodoItem } from '../Model/model';
import { from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mytodolist2';
  model = new model();

  getName()
  {
    return this.model.user;
  }

  getTodoItem()
  {
    return this.model.items;

    // return items that's only done.

    // return this.model.items.filter(item => item.done);
  }
  addItem(newTask: string){
    if(newTask !="" )
    this.model.items.push(new TodoItem(newTask,false))
  }
}
