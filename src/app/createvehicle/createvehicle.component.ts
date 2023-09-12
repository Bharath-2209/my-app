import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { VehiclesService } from '../vehicles.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-createvehicle',
  templateUrl: './createvehicle.component.html',
  styleUrls: ['./createvehicle.component.css']
})
export class CreatevehicleComponent {

  public showButton:any;
  public id: any = [];
  public vehicleForm: FormGroup = new FormGroup({
    Vehicle: new FormControl(),
    manufacturer: new FormControl(),
    model: new FormControl(),
    type: new FormControl(),
    fuel: new FormControl(),
    color: new FormControl(),

    // nested form method
    address: new FormGroup({
      hno: new FormControl(),
      state: new FormControl(),
      pin: new FormControl(),
    }),

    // Dynamic form method
    tax: new FormControl(),
    cgst: new FormControl(),
    sgst: new FormControl(),

    // array form method
    cards: new FormArray([])
  });

  // Array form method
  get cardsFormArray() {
    return this.vehicleForm.get('cards') as FormArray;
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

  constructor(private _vehicleServices: VehiclesService, private activatedRoute: ActivatedRoute) {

    //............... edit button to edit 
    this.activatedRoute.params.subscribe(
      (data: any) => {
        this.id = data.id;

        this._vehicleServices.getDetails(this.id).subscribe(
          (data: any) => {
            this.vehicleForm.patchValue(data);
          }
        )
      }
    )

    this.showButton=this.id?"Update" : "Submit"

  }
  //............... edit button to edit 

  submit() {
    console.log(this.vehicleForm);

    if (this.id) {
// .......edit vehicle
      this._vehicleServices.updateVehicle(this.id,this.vehicleForm.value).subscribe(
        (data: any) => {
          alert("Vehicle details updated successfully")
        },
        (err: any) => {
          alert("Vehicle details updation failed")
        }
      )
    }
    else{
// .......create vehicle
      this._vehicleServices.createVehicle(this.vehicleForm.value).subscribe(
        (data: any) => {
          alert("Vehicle created successfully")
        },
        (err: any) => {
          alert("Vehicle creation failed")
        }
      )

    }
  }





}
