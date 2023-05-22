import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/core/services/shared.service';
import { margin } from 'src/app/config/interface';
import { addappointment } from 'src/app/config/textboxinterface';

@Component({
  selector: 'app-addappointments',
  templateUrl: './addappointments.component.html',
  styleUrls: ['./addappointments.component.scss']
})
export class AddappointmentsComponent {

  form: any; addappointment: any = addappointment; err_fields: any = []; margin: any = margin

  constructor(private rte: Router, public shared: SharedService) { }

  ngOnInit(): void {
    this.shared.setIdentifiers(this.rte.url)
    this.createForm()
  }

  createForm() {
    let form: any = {};
    Object.keys(this.addappointment).map((e: any, i: any) => {
      if (i > 0) {
        for (let ele of this.addappointment[e]) {
          form[ele?.controlName] = this.addappointment[e]?.required ? new FormControl(ele?.default, Validators.required) : new FormControl(ele?.default);
        }
      }
    })

    this.form = new FormGroup(form)
  }

  public remErrFields = (params: any) => {
    let index = this.err_fields?.indexOf(params)
    if (index > -1) { this.err_fields?.splice(index, 1) }
  }
}
