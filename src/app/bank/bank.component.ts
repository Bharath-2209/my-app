import { Component } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent {

  public myBalance:number = 0;

  constructor(private _bankService:BankService){
    this.myBalance = _bankService.balance
  }
  
}
