import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  empName = "nikhil";
  empSalary = 25000;
  empLastName ="SHAH";
  empDOJ = new Date();
  city = 'mumbai';
  empDetails = {empId:101 ,empName:'Nikhil',empEmail:'nikhil@somewhere.com'}



}
