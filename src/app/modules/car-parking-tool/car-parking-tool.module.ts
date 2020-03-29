import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ParkCarModalComponent } from './modal/park-car-modal.component';

@NgModule({
  declarations: [ListComponent, FormComponent, ParkCarModalComponent],
  imports: [
    CommonModule,
    BsDropdownModule,
    ModalModule
  ],
  entryComponents: [ParkCarModalComponent]
})
export class CarParkingToolModule { }
