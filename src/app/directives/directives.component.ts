import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  public time:number = 0;

  public ages:number[] = [10,20,30,40];

  public states:string[] = ['Telangana','Andhra Pradesh','Uttar Pradesh','Rajasthan',]

  public users:any = [
    {name:'anil',age:2,marks:80,phone:4325343},
    {name:'balu',age:14,marks:14,phone:3535343},
    {name:'ramu',age:17,marks:50,phone:6765343},
    {name:'rohi',age:25,marks:20,phone:4355343}
  ]

  public term:string = "";

  filter(){
    this.users = this.users.filter((value:any)=>value.name.includes(this.term))
  }

  ageHighToLow(){
    this.users = this.users.sort((a:any,b:any)=>b.age-a.age);
  }

  ageLowToHigh(){
    this.users = this.users.sort((a:any,b:any)=>a.age-b.age);
  }

  increaseByOne(){
    this.users = this.users.map((value:any)=>{
      value.age = value.age+1;
      return value;
    })
  }

  total(){
    let total = this.users.reduce((sum:any,a:any)=>sum+a.age,0);
    alert(total);
  }

  delete(i:any){
    this.users.splice(i,1);
  }
  
}
