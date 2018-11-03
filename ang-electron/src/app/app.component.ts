 
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
              <h1>{{'Data binding : '+pageHeader}}</h1>


              <h2>{{getFullName()}}</h2>

              <img src='{{imgPath}}'/>

              <app-employee></app-employee><br><br>

              <span [innerHtml]='binding'> 
              </span>  <br><br>

              <span bind-innerHtml='binding2'> 
              </span>   <br><br>              
            </div>

            <app-employee1></app-employee1><br><br>

            Name : <input [value]='name' (input)='name = $event.target.value'>
            <br>
            You entered : {{name}}<br><br>
            Name : <input [(value)]='name1'>
            <br><br>
           
            <app-employee-list></app-employee-list>
            `
})
export class AppComponent {
  pageHeader:string = 'Employee Details';
  imgPath:string='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png';

firstName: string='Mahesh';
lastName:string='Pothuluru';
binding:string='Hello World from using binding of []';
binding2:string='Hello World from using binding of bind(Canonical)';
name:string='';
name1:string='';
getFullName()
{
  return this.firstName+' '+this.lastName;
}

}

//<h1>{{pageHeader ? pageHeader : 'NO header'}}</h1>