import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent {
  public userForm:FormGroup = new FormGroup({
    name:new FormControl(),
    phone:new FormControl(),
    city:new FormControl(),
    fee:new FormControl(),
    id:new FormControl()
  });

  constructor(private _userService:UsersService){}

  submit(){
    console.log(this.userForm);

    this._userService.createUser(this.userForm.value).subscribe(
      (data:any)=>{
        alert("User created successfully")
      },
      (err:any)=>{
        alert("user creation failed")
      }
    )

  }
 

}
