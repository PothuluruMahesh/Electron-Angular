import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  firstName: string = 'Mahesh';
  lastName: string = 'Pothuluru';
  gender: string = 'Male';
  age: number = 23;

}
