import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  public name:string[] = [];
  public term: string = "";

  add(){
    this.name.push(this.term);
    console.log(this.name)
  }

  delete(i:number){
    this.name.splice(i,1)
  }
}
