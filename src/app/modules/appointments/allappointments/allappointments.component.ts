import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/core/services/shared.service';

@Component({
  selector: 'app-allappointments',
  templateUrl: './allappointments.component.html',
  styleUrls: ['./allappointments.component.scss']
})
export class AllappointmentsComponent {

  form: any;

  constructor(private rte: Router, public shared: SharedService) { }

  ngOnInit(): void {
    this.shared.setIdentifiers(this.rte.url)
    this.createForm()
  }

  createForm() {
    this.form = new FormGroup({
      outlet: new FormControl(''),
      from: new FormControl(''),
      to: new FormControl('')
    })
  }

  dummy2 = [
    {
      appointment_id: 'AP0001',
      name: 'Customer 1',
      date: new Date(),
      services: 'Service 1',
      outlet: 'Serangoon',
      beautician: 'Beautician 1',
      status: 'pending',
      action: 'string'
    },
    {
      appointment_id: 'AP0002',
      name: 'Customer 2',
      date: new Date()  ,
      services: 'Service 2',
      outlet: 'Serangoon',
      beautician: 'Beautician 2',
      status: 'upcoming',
      action: 'string'
    },
    {
      appointment_id: 'AP0003',
      name: 'Customer 3',
      date: new Date(),
      services: 'Service 3',
      outlet: 'Serangoon',
      beautician: 'Beautician 3',
      status: 'completed',
      action: 'string'
    },
    {
      appointment_id: 'AP0004',
      name: 'Customer 4',
      date: new Date(),
      services: 'Service 4',
      outlet: 'Serangoon',
      beautician: 'Beautician 4',
      status: 'postponed',
      action: 'string'
    }
    
  ]
}
