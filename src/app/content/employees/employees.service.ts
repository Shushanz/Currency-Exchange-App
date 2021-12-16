import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EmployeesService {

  constructor(private httpClient: HttpClient) { }

  getData() {

    let url = "https://randomuser.me/api?results=25"
    return this.httpClient.get(url)

  }
}