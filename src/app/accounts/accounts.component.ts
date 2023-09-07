import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {

  public accounts:any = [];
  
  public term:any = "";

  public column:any = "";
  public order:any = "";

  public limit:any = "";
  public page:any = "";

  constructor(private _accountsService:AccountsService){
    _accountsService.getAccounts().subscribe(
      (data:any)=>{
        this.accounts = data;
      },
      (err:any)=>{
        alert("Internal server error")
      }
    )
  }

  // filter method

  getFilteredAccounts(){
    this._accountsService.getFilteredAccounts(this.term).subscribe(
      (data:any)=>{
        this.accounts = data;
      },
      (err:any)=>
      alert("Internal server error")
    )
  }

  // sort method

  getSortedAccounts(){
    this._accountsService.getSortedAccounts(this.column,this.order).subscribe(
      (data:any)=>{
        this.accounts = data;
      },
      (err:any)=>{
        alert("Internal server error")
      }
    )
  }

  // delete method

  deleteAccounts(id:any){
    this._accountsService.deleteaccounts(id).subscribe(
      (data:any)=>{
        alert("deleted successfully");
        location.reload();
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }

  // pagination method
  getPagedAccounts(){
    this._accountsService.getPagedAccounts(this.limit,this.page).subscribe(
      (data:any)=>{
        this.accounts = data;
      },
      (err:any)=>{
        alert("Internal server error")
      }
    )
  }
}
