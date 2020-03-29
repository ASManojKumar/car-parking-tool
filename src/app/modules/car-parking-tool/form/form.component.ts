import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  numbers_regex = '^-?[0-9]*$';
  constructor(private router: Router) { }

  ngOnInit() { }

  submitForm() {
    this.router.navigate(['/list']);
  }

}
