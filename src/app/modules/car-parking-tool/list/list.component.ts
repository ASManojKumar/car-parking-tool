import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ParkCarModalComponent } from '../modal/park-car-modal.component';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [BsModalRef]
})
export class ListComponent implements OnInit {
  car_parking_tool: any;
  color: any;
  public onClose: Subject<any>;
  constructor(private modalService: BsModalService, private _bsModalRef: BsModalRef) {
    this.car_parking_tool = {
      'total_parking_slots': 10,
      'fee_collected': 0
    };
  }

  ngOnInit() {
    this.car_parking_tool.car_details = [{
      'carNumber': 'KA-64-YX-0619',
      'carColor': 'Red',
      'slotNumber': 4,
      'carParkingTime': 1585475522103
    }, {
      'carNumber': 'KA-62-BC-1256',
      'carColor': 'Blue',
      'slotNumber': 3,
      'carParkingTime': 1585475522103
    }, {
      'carNumber': 'KA-03-BB-2323',
      'carColor': 'Green',
      'slotNumber': 5,
      'carParkingTime': 1585475522103
    }, {
      'carNumber': 'KA-13-MG-7244',
      'carColor': 'White',
      'slotNumber': 2,
      'carParkingTime': 1585475522103
    }, {
      'carNumber': 'KA-22-FT-4567',
      'carColor': 'Black',
      'slotNumber': 1,
      'carParkingTime': 1585475522103
    }];
    // get list of car colors for dropdown
    this.getCarColorList();
    // get car slot numbers for updating
    this.getCarSlotNumber();
  }

  getCarColorList() {
    this.car_parking_tool.color_section = [];
    this.car_parking_tool.car_details.forEach((color: any) => {
      this.car_parking_tool.color_section.push({
        'color': color.carColor
      })
    });
  }

  getCarSlotNumber() {
    this.car_parking_tool.slot_numbers = [];
    this.car_parking_tool.car_details.forEach(car => {
      this.car_parking_tool.slot_numbers.push(car.slotNumber);
    });
  }

  // get missed slot number function
  getCarSlotMissingNumber() {
    var car_numbers = this.car_parking_tool.slot_numbers.sort();
    var missing_number;
    for (var i = 1; i <= 10; i++) {
      if (car_numbers[i - 1] != i) {
        missing_number = i;
        return missing_number;
      }
    }
  }

  // calling park car modal for parking new car
  parkCar() {
    let modal = this.modalService.show(ParkCarModalComponent, { class: 'modal-xs' });
    (<ParkCarModalComponent>modal.content).showConfirmationModal();
    (<ParkCarModalComponent>modal.content).onClose.subscribe(data => {
      if (data) {
        let new_parking_data = {
          'carNumber': data.registration_number,
          'carColor': data.color,
          'carParkingTime': new Date(),
          'slotNumber': this.getCarSlotMissingNumber()
        };
        this.car_parking_tool.car_details.unshift(new_parking_data);
        this.getCarColorList();
        this.getCarSlotNumber();
      }
    });
  }

  // removing parked car
  removeCarDetails(index) {
    this.car_parking_tool.car_details.splice(index, 1);
    this.car_parking_tool.fee_collected += 20;
    this.getCarSlotNumber();
  }

  // reset filters applied
  resetFilterSelection() {
    this.car_parking_tool.parking_number = '';
    delete this.color;
  }

  fetchData(template: TemplateRef<any>) {
    this._bsModalRef = this.modalService.show(template);
  }

  public onCancel() {
    this.onClose.next(false);
    this._bsModalRef.hide();
  }

}
