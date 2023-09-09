import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent {

  public accountForm: FormGroup = new FormGroup({
    account_name: new FormControl(),
    available_balance: new FormControl(),
    account_number: new FormControl(),
    city: new FormControl(),

    // nested method
    address: new FormGroup({
      hno: new FormControl(),
      state: new FormControl(),
      pin: new FormControl()
    }),

    // Dynamic form method
    type: new FormControl(),
    earlyfee: new FormControl(),
    latefee: new FormControl(),


    // Array form method
    cards: new FormArray([])
  });

  get cardsFormArray() {
    return this.accountForm.get('cards') as FormArray;
  }

  addCard() {
    this.cardsFormArray.push(
      new FormGroup({
        no: new FormControl(),
        exp: new FormControl(),
        cvv: new FormControl()
      })
    )
  }

  deleteCard(i: number) {
    this.cardsFormArray.removeAt(i);
  }
  constructor(private _accountsService: AccountsService) { }

  submit() {
    console.log(this.accountForm);

    this._accountsService.createAccount(this.accountForm.value).subscribe(
      (data: any) => {
        alert("Account created successfully")
      },
      (err: any) => {
        alert("Account creation failed")
      }
    )
  }

}
