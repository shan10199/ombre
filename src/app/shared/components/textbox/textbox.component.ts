import { Component, Input, ViewChild } from '@angular/core';
import { menu } from '../../../config/image'

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss']
})

export class TextboxComponent {

  image: any = menu; chips: any = []; date: any = new Date(); hours: any = []; minutes: any = [];

  @Input() label: any; @Input() type: any; @Input() name: any; @Input() id: any; @Input() class: any;
  @Input() groupName: any; @Input() controlName: any; @Input() modelChange: any;

  selectedTime: any; select: any =['Option 1','Option 2','Option 3','Option 4','Option 5', ]

  onTimeSelected() {
    // Handle the selected time
    console.log(this.selectedTime);
  }

  ngOnInit(): void {
    this.hours = Array.from(Array(12).keys())
    this.minutes = Array.from(Array(60).keys())
    console.log(this.hours)
  }

  onDateChange(event: any) {
    this.date = event;
  }

  addChips(params: any) {
    if (!this.chips?.includes(params)) {
      this.chips.push(params)
    }
  }

  deleteChip(params: any) {
    let index = this.chips?.indexOf(params)
    if (index > -1) {
      this.chips.splice(index, 1)
    }
  }


}
