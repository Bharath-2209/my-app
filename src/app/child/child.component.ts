import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() public ac:number = 0;
  public bc: number = 0;
  // rating task
  @Input() public rating: number = 0;
  public rc:number=0;

  // calculator task
  @Input() public num1: number = 0;
  
  @Input() public num2: number = 0;

  @Output() public bEvent:EventEmitter<any> = new EventEmitter();

  send(){
    this.bEvent.emit(this.bc)
  }
  
  
  // calculator task

  @Output() public cal:EventEmitter<any> = new EventEmitter();

  sum(){
    this.cal.emit(this.num1 + this.num2)
  }
  sub(){
    this.cal.emit(this.num1 - this.num2)
  }
  mul(){
    this.cal.emit(this.num1 * this.num2)
  }
}
