import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehiclesService } from '../vehicles.service';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-vehicledetails',
  templateUrl: './vehicledetails.component.html',
  styleUrls: ['./vehicledetails.component.css']
})
export class VehicledetailsComponent {

  public vehicle:any = {};
  public id:any = [];

  constructor(private activatedRoute:ActivatedRoute, private vehiclesService:VehiclesService) {
    activatedRoute.params.subscribe(
      (data:any)=>{
        this.id = data.id;

        vehiclesService.getDetails(this.id).subscribe(
          (data:any)=>{
            this.vehicle = data;
          }
        )
      }
    )
  }
}
