import { Component } from '@angular/core';
import { menu } from '../../../config/image'

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {

  image: any = menu

}
