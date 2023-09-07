import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  // table
  public products:any = [
    {name:'pen',price:10,rating:3,fd:true},
    {name:'phone',price:13000,rating:2,fd:false},
    {name:'shirt',price:400,rating:4,fd:true},
    {name:'cap',price:200,rating:5,fd:false},
    {name:'mobilecase',price:300,rating:2,fd:true},
    {name:'remote',price:400,rating:2.5,fd:false}
  ]
  
  public search:string = "";

  // filter
  filter(){
    this.products = this.products.filter((value:any)=>value.name.includes(this.search))
  }

  onlyFreeDelivery(){
    this.products = this.products.filter((value:any)=>value.fd==true);
  }

  // sort
  priceLowToHigh(){
    this.products = this.products.sort((a:any,b:any)=>a.price-b.price);
  }

   priceHighToLow(){
    this.products = this.products.sort((a:any,b:any)=>b.price-a.price);
   }

   ratingLowToHigh(){
    this.products = this.products.sort((a:any,b:any)=>a.rating-b.rating);
  }

   ratingHighToLow(){
    this.products = this.products.sort((a:any,b:any)=>b.rating-a.rating);
   }

  //  map
   discount(){
    this.products = this.products.map((value:any)=>{
      value.price = value.price * 0.5;
      return value;
    });
   }

   priceWithDeliveryCharges(){
    this.products = this.products.map((value:any)=>{
      value.price = value.price + 50;
      return value;
    });
   }

  //  reduce
   totalPrice(){
    let total = this.products.reduce((sum:any,a:any)=>sum+a.price,0);
    alert(total);
   }

   totalCartItems(){
    let total = this.products.length;
    alert(total);
   }

  //  delete 
  delete(i:any) {
    this.products.splice(i,1);
  }
}
