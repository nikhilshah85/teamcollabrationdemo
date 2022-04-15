import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {


    empList = [
      {empNo:101, empName:'Mike',empDesigantion:'Sales',empGender:'Male'},
      {empNo:102, empName:'Michelle',empDesigantion:'Sales',empGender:'Female'},
      {empNo:103, empName:'Kurt',empDesigantion:'Sales',empGender:'Male'},
      {empNo:104, empName:'John',empDesigantion:'Sales',empGender:'Male'},
      {empNo:105, empName:'Johnson',empDesigantion:'Sales',empGender:'Male'},
      {empNo:106, empName:'Alina',empDesigantion:'Sales',empGender:'Female'},
      {empNo:107, empName:'Crisel',empDesigantion:'Sales',empGender:'Female'},
      {empNo:108, empName:'Mary',empDesigantion:'Sales',empGender:'Female'},
      {empNo:109, empName:'Steven',empDesigantion:'Sales',empGender:'Male'},
    ]



  constructor() { }

  ngOnInit(): void {
  }

}
