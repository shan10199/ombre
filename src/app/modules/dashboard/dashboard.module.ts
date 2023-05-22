import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ChartModule } from 'angular-highcharts';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule, ChartModule,
    DashboardRoutingModule, SharedModule, ReactiveFormsModule
  ]
})
export class DashboardModule { }
