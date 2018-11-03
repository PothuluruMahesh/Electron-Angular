import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { Employee1Component } from './employee1/employee1.component';
import{FormsModule} from '@angular/forms';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeTrackComponent } from './employee-track/employee-track.component';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    Employee1Component,
    EmployeeListComponent,
    EmployeeTrackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
