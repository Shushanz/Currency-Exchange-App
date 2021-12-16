import { Component, OnInit } from '@angular/core';
import { EmployeesService } from './employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
})
export class EmployeesComponent implements OnInit {

  data;
  lat = 51.678418;
  lng = 51.809007;

  constructor(private employee: EmployeesService) {

    this.employee.getData().subscribe(data => {

      this.data = data['results']

    })
  }

  ngOnInit(): void {
  }

}