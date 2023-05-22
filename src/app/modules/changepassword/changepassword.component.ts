import { Component } from '@angular/core';
import { images, menu } from '../../config/image';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent {

  image: any = menu; form: any; err_fields: any = []; clicked: boolean = false;

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.form = new FormGroup({
      new_password: new FormControl('', Validators.required),
      confirm_password: new FormControl('', Validators.required)
    })
  }

  public remErrFields = (params: any) => {
    let index = this.err_fields?.indexOf(params)
    if (index > -1) { this.err_fields?.splice(index, 1) }
  }

  handleCheckBox(event: any) {
    this.form.get('remember').setValue(event?.checked)
  }

  onSubmit() {
    Object.keys(this.form.controls).forEach(field => {
      if (this.form.get(field).invalid && !this.err_fields?.includes(field)) {
        this.err_fields?.push(field)
      }
    });
    if (this.form.valid && !this.clicked) {
      this.clicked = true
    }
  }
}
