import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactHrComponent } from './contact-hr/contact-hr.component';
import { ContactSupportComponent } from './contact-support/contact-support.component';

const routes: Routes = [
  // lazy loading
  {path: 'contact-hr', component:ContactHrComponent},
  {path: 'contact-support', component:ContactSupportComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
