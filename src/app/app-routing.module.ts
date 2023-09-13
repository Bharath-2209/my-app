import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DirectivesComponent } from './directives/directives.component';
import { TableComponent } from './table/table.component';
import { PipesComponent } from './pipes/pipes.component';
import { GradeComponent } from './grade/grade.component';
import { DiceComponent } from './dice/dice.component';
import { BankComponent } from './bank/bank.component';
import { UsersComponent } from './users/users.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { AccountsComponent } from './accounts/accounts.component';
import { PracticeComponent } from './practice/practice.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { EmailComponent } from './email/email.component';
import { PhotoComponent } from './photo/photo.component';
import { ActivityComponent } from './activity/activity.component';
import { BooksComponent } from './books/books.component';
import { CreatevehicleComponent } from './createvehicle/createvehicle.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { CreateaccountComponent} from './createaccount/createaccount.component';
import { authenticationGuard } from './authentication.guard';
import { notifyGuard } from './notify.guard';
import { VehicledetailsComponent } from './vehicledetails/vehicledetails.component';
import { TodoComponent } from './todo/todo.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'todo', component:TodoComponent},
  {path: 'dashboard', component:DashboardComponent, canActivate:[authenticationGuard], children:[
    {path: 'home', component:HomeComponent},
    {path: 'about', component:AboutComponent},
    {path: 'data-binding', component:DataBindingComponent},
    {path: 'calculator', component:CalculatorComponent},
    {path: 'rectangle', component:RectangleComponent},
    {path: 'bmi', component:BmiComponent},
    {path: 'directives', component:DirectivesComponent},
    {path: 'table', component:TableComponent},
    {path: 'pipes', component:PipesComponent},
    {path: 'grade', component:GradeComponent},
    {path: 'dice', component:DiceComponent},
    {path: 'bank', component:BankComponent},
    {path: 'users', component:UsersComponent},
    {path: 'vehicles', component:VehiclesComponent},
    {path: 'accounts', component:AccountsComponent},
    {path: 'practice', component:PracticeComponent},
    {path: 'flipkart', component:FlipkartComponent},
    {path:'email', component:EmailComponent},
    {path:'photo', component:PhotoComponent},
    {path:'activity', component:ActivityComponent},
    {path:'books', component:BooksComponent},
    {path:'createvehicle', component:CreatevehicleComponent, canDeactivate:[notifyGuard]},
    // .....edit button.......
    {path: 'edit-vehicles/:id', component:CreatevehicleComponent},
    {path:'createuser', component:CreateuserComponent, canDeactivate:[notifyGuard]},
    {path:'createaccount', component:CreateaccountComponent, canDeactivate:[notifyGuard]},
    // page communication for view button
    {path: 'vehicledetails/:id', component:VehicledetailsComponent},
    // component communication
    { path: 'parent', component:ParentComponent},
    { path: 'child', component:ChildComponent}

  ]},
  {path: '', component:LoginComponent},
  {path: '**', component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
