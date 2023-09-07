import { Component } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent {

  public num: number = 0;

  roll() {
    this.num = Math.floor(Math.random() * 6) + 1;
    return this.num;
  }
}
