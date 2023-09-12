import { Component } from '@angular/core';
import { VehiclesService } from '../vehicles.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {

  public vehicles:any = [];

  public term:any="";

  public column:any = "";
  public order:any = "";

  public limit:any = "";
  public page:any = "";

// data

  constructor(private _vehiclesService:VehiclesService, private router:Router){
    _vehiclesService.getVehicles().subscribe(
      (data:any)=> {
        this.vehicles = data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }


// filter method

  getFilteredVehicles(){
    this._vehiclesService.getFilteredVehicles(this.term).subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{
        alert("Internal server error")
      }
    )

  }

 

  // sort method

  getSortedVehicles(){
    this._vehiclesService.getSortedVehicles(this.column,this.order).subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{
        alert("Internal server error");
      }

    )
  }

// delete method

  deleteVehicles(id:any){
    this._vehiclesService.deleteVehicles(id).subscribe(
      (data:any)=>{
        alert("deleted successful");
        location.reload();
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }

  // pagination method
  pagedVehicles(){
    this._vehiclesService.pagedVehicles(this.limit,this.page).subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{
        alert("Internal server error")
      }
    )
  }


//  page communication for view button
  view(id:any){
    this.router.navigateByUrl('/dashboard/vehicledetails/'+id);
  }
  
  
}
