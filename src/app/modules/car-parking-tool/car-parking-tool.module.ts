import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [ListComponent, FormComponent],
  imports: [
    CommonModule,
    BsDropdownModule,
    ModalModule
  ]
})
export class CarParkingToolModule { }
