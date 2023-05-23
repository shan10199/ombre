import { Component, OnInit } from '@angular/core';
import { sidenav } from 'src/app/config/interface'

declare const clicked: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ombre'; component: any;

  onActivate(event: any) {
    this.component = sidenav?.includes(event) ? false : true
    
  }
}
