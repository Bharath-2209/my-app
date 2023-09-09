import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent {
  // form method
  public userForm:FormGroup = new FormGroup({
    // input form validators for name and phone given below
    name: new FormControl("",[Validators.required,Validators.minLength(3)]),
    phone: new FormControl("",[Validators.required,Validators.min(1000000000),Validators.max(9999999999)]),
    city: new FormControl(),
    fee: new FormControl(),
    id: new FormControl(),

    // Nested form method
    address: new FormGroup({
      // nested form validators given below
      hno: new FormControl(),
      state: new FormControl("",[Validators.required]),
      pin: new FormControl("",[Validators.required,Validators.min(100000),Validators.max(999999)])
    }),

    // Dynamic form method
    type: new FormControl(),
    busfee: new FormControl(),
    hostelfee: new FormControl(),

    // Array form method
    cards: new FormArray([])
  });

  // Array form method
  get cardsFormArray(){
    return this.userForm.get('cards') as FormArray;
  }

  addCard(){
    this.cardsFormArray.push(
      new FormGroup({
        no: new FormControl(),
        exp: new FormControl(),
        // array form validators
        cvv: new FormControl("",[Validators.required,Validators.min(100),Validators.max(999)])
      })
    )
  }

  deleteCard(i:number){
    this.cardsFormArray.removeAt(i);
  }

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
