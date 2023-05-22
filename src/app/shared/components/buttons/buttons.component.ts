import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {

  @Input() label = ''; @Input() type = ''; @Input() name = ''; @Input() id = ''; @Input() class = ''; @Input() action: any;

}
