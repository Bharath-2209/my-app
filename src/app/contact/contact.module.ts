import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactHrComponent } from './contact-hr/contact-hr.component';
import { ContactSupportComponent } from './contact-support/contact-support.component';


@NgModule({
  declarations: [
    ContactHrComponent,
    ContactSupportComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
