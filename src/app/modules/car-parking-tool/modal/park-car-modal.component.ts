import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-park-car-modal',
  templateUrl: './park-car-modal.component.html'
})
export class ParkCarModalComponent {
  park_car_modal: any;
  public onClose: Subject<any>;

  constructor(
    private _bsModalRef: BsModalRef) {
    this.park_car_modal = {};
  }


  public ngOnInit() {
    this.onClose = new Subject();
  }

  public showConfirmationModal(): void {
  }

  public submitForm() {
    this._bsModalRef.hide();
    this.onClose.next(this.park_car_modal);
  }

  public onCancel() {
    this.onClose.next(false);
    this._bsModalRef.hide();
  }
}
