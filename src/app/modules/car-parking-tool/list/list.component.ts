import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  car_parking_tool: any;

  constructor() {
    this.car_parking_tool = {
      'total_parking_slots': 10,
      'color_section': []
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

    this.car_parking_tool.car_details.forEach((color: any) => {
      this.car_parking_tool.color_section.push({
        'color': color.carColor
      })
    });
  }

  removeCarDetails(index) {
    this.car_parking_tool.car_details.splice(index, 1);
  }

  resetFilterSelection() {
    this.car_parking_tool.parking_number = '';
  }

}
