import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  },

  {
    path: 'changepassword', loadChildren: () => import('./modules/changepassword/changepassword.module').then(m => m.ChangepasswordModule)
  },

  {
    path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  },

  {
    path: 'appointments', loadChildren: () => import('./modules/appointments/appointments.module').then(m => m.AppointmentsModule)
  },


  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
