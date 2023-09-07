import { Component } from '@angular/core';
import { EmailService } from '../email.service';
import { FlipkartService } from '../flipkart.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {

  public email:any = [];

  constructor(private _emailService:EmailService) {
    _emailService.getEmail().subscribe(
      (data:any)=>{
        this.email = data;
      },
      (err:any)=>{
        alert("Internal server error")
      }
    )
  }

}
