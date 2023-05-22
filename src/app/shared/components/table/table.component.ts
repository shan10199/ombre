import { Component, Input } from '@angular/core';
import { allappointments, dashboard } from 'src/app/config/tableinterface';
import { menu } from '../../../config/image'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  image: any = menu; config: any

 @Input() tableData: any; @Input() page: any = ''; @Input() pagination: any;

 

 ngOnInit(): void {
  this.config = this.page == 'dashboard' ? dashboard : allappointments;
  console.log(this.config)
 }

}
