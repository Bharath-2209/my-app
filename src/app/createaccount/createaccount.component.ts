import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent {

  public accountForm:FormGroup = new FormGroup({
    account_name:new FormControl(),
    available_balance:new FormControl(),
    account_number:new FormControl(),
    city: new FormControl()
  });

constructor(private _accountsService:AccountsService){}

  submit(){
    console.log(this.accountForm);

    this._accountsService.createAccount(this.accountForm.value).subscribe(
      (data:any)=>{
        alert("Account created successfully")
      },
      (err:any)=>{
        alert("Account creation failed")
      }
    )
  }

}
