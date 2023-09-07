import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  public users:any = [];

  public term:any = "";

  public column:any = "";
  public order:any = "";

  public limit:any = "";
  public page:any = "";

  constructor(private _usersService:UsersService) { 
    _usersService.getUsers().subscribe(
      (data:any)=>{
        this.users = data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }

  // filter method
  getFilteredUsers(){
    this._usersService.getFilteredUsers(this.term).subscribe(
      (data:any)=>{
        this.users = data;
      },
      (err:any)=>{
        alert("Internal server error")
      }
    )
  }

  // sort method
  getSortedUsers(){
    this._usersService.getSortedUsers(this.column,this.order).subscribe(
      (data:any)=>{
        this.users = data;
      },
      (err:any)=>{
        alert("Internal server error")
      }
    )
  }

  // delete method
  deleteUsers(id:any){
    this._usersService.deleteUsers(id).subscribe(
      (data:any)=>{
        alert("deleted successful");
        location.reload
      },
      (err:any)=>{
        alert("Internal server error")
      }
    )
  }

  // pagination method
  getPagedUsers(){
    this._usersService.getPagedUsers(this.limit,this.page).subscribe(
      (data:any)=>{
        this.users = data;
      },
      (err:any)=>{
        alert("Internal server error")
      }
    )
  }
}
