import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-track',
  templateUrl: './employee-track.component.html',
  styleUrls: ['./employee-track.component.css']
})
export class EmployeeTrackComponent{

  employees:any[];
  constructor() {
    this.employees = [
      {
          code: 'emp101', name: 'Mahesh', gender: 'Male', annualSalary: 5500, dateOfBirth: '25/6/1998'
      },
      {
          code: 'emp102', name: 'Naresh', gender: 'Male',annualSalary: 5700.95, dateOfBirth: '9/6/1992'
      },
      {
          code: 'emp103', name: 'Suresh', gender: 'Male',annualSalary: 5900, dateOfBirth: '12/8/1995'
      },
      {
          code: 'emp104', name: 'Mary', gender: 'Female',annualSalary: 6500.826, dateOfBirth: '14/10/1990'
      },
  ];
   }

   getEmployees(): void {
    this.employees = [
      {
        code: 'emp101', name: 'Mahesh', gender: 'Male', annualSalary: 5500, dateOfBirth: '25/6/1998'
    },
    {
        code: 'emp102', name: 'Naresh', gender: 'Male',annualSalary: 5700.95, dateOfBirth: '9/6/1992'
    },
    {
        code: 'emp103', name: 'Suresh', gender: 'Male',annualSalary: 5900, dateOfBirth: '12/8/1995'
    },
    {
        code: 'emp104', name: 'Mary', gender: 'Female',annualSalary: 6500.826, dateOfBirth: '14/10/1990'
    },
    {
      code: 'emp104', name: 'Leesa', gender: 'Female',annualSalary: 6500.826, dateOfBirth: '14/10/1995'
  },
    ];
}
}
