import { Component } from '@angular/core';
import { images, menu } from '../../../config/image';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  image: any = menu; form: any; err_fields: any = []

  constructor(private rte: Router) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.form = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      remember: new FormControl(false)
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
    this.form.get('remember').setValue(this.form.get('remember') ? true : false)

    if(this.form.controls['email'].valid && this.form.controls['password'].valid ) {
        this.routerLink('dashboard')
    }
  }

  routerLink(params: any) {
    this.rte.navigate([params])
  }

}
