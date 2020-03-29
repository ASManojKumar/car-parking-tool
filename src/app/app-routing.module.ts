import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './modules/car-parking-tool/form/form.component';
import { ListComponent } from './modules/car-parking-tool/list/list.component';
import { ParkCarModalComponent } from './modules/car-parking-tool/modal/park-car-modal.component';

const routes: Routes = [
  { path: '', redirectTo: 'form', pathMatch: 'full' },
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'list',
    component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  FormComponent,
  ListComponent,
  ParkCarModalComponent
];
