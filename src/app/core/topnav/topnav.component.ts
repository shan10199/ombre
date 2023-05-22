import { Component } from '@angular/core';
import { menu } from '../../config/image';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent {

  images: any = menu

}
