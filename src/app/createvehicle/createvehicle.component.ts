import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-createvehicle',
  templateUrl: './createvehicle.component.html',
  styleUrls: ['./createvehicle.component.css']
})
export class CreatevehicleComponent {

  public vehicleForm: FormGroup = new FormGroup({
    Vehicle: new FormControl(),
    manufacturer: new FormControl(),
    model: new FormControl(),
    type: new FormControl(),
    fuel: new FormControl(),
    color: new FormControl()
  });

  constructor(private _vehicleServices:VehiclesService){}

  submit(){
    console.log(this.vehicleForm);

    this._vehicleServices.createVehicle(this.vehicleForm.value).subscribe(
      (data:any)=>{
        alert("Vehicle created successfully")
      },
      (err:any)=>{
        alert("Vehicle creation failed")
      }
    )
  }

 

  

}
