import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonsComponent } from './components/buttons/buttons.component';
import { TextboxComponent } from './components/textbox/textbox.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { TableComponent } from './components/table/table.component';
import { ViewComponent } from './components/view/view.component';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    ButtonsComponent,
    TextboxComponent,
    CheckboxComponent,
    TableComponent,
    ViewComponent,
    ModalComponent
  ],
  imports: [
    FormsModule, ReactiveFormsModule, MatDatepickerModule, MatNativeDateModule, MatAutocompleteModule, MatDialogModule,
    CommonModule, MatCheckboxModule, MatPaginatorModule, NgxMaterialTimepickerModule.setLocale('en-US')
  ],
  exports: [
    TextboxComponent, ButtonsComponent, CheckboxComponent, TableComponent, ViewComponent
  ]
})
export class SharedModule { }
