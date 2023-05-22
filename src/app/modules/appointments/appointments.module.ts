import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppointmentsRoutingModule } from './appointments-routing.module';
import { AllappointmentsComponent } from './allappointments/allappointments.component';
import { AppointmentComponent } from './appointment.component';
import { AddappointmentsComponent } from './allappointments/addappointments/addappointments.component';


@NgModule({
  declarations: [
    AllappointmentsComponent,
    AppointmentComponent,
    AddappointmentsComponent
  ],
  imports: [
    CommonModule, SharedModule, ReactiveFormsModule, AppointmentsRoutingModule
  ]
})
export class AppointmentsModule { }
