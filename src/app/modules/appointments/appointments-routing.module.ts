import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllappointmentsComponent } from './allappointments/allappointments.component';
import { AppointmentComponent } from './appointment.component';
import { AddappointmentsComponent } from './allappointments/addappointments/addappointments.component';

const routes: Routes = [
  {
    path: '', component: AppointmentComponent, children: [
      {
        path: 'allappointments', children: [
          { path: '', component: AllappointmentsComponent },
          { path: 'addappointment', component: AddappointmentsComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentsRoutingModule { }
