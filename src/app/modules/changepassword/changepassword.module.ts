import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ChangePasswordRoutingModule } from './changepassword-routing.module';

import { ChangepasswordComponent } from './changepassword.component';



@NgModule({
  declarations: [
    ChangepasswordComponent
  ],
  imports: [
    CommonModule, ChangePasswordRoutingModule, SharedModule, ReactiveFormsModule
  ]
})
export class ChangepasswordModule { }
