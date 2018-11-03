import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee1',
  templateUrl: './employee1.component.html',
  styleUrls: ['./employee1.component.css']
})
export class Employee1Component {

  calSpanNo:number=2;
  firstName: string = 'Naresh';
  lastName: string = 'Vasanth';
  gender: string = 'Male';
  age: number = 23;
}
