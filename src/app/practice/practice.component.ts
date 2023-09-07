import { Component } from '@angular/core';
import { PracticeService } from '../practice.service';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent {

  public practice:any = [];

  constructor(private _practiceService:PracticeService){
    _practiceService.getPractice().subscribe(
      (data:any)=>{
        this.practice = data.entries;
      },
      (err:any)=>{
        alert("Internal server error")
      }
    )
  }

  // delete
  delete(i:any){
    this.practice.splice(i,1);
  }
}
