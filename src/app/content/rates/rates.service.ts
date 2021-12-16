import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable()
export class RatesService {

  result: any;
  endpoint = 'convert';
  access_key = environment.FIXER_ACCESS_KEY;
  baseURL = 'http://data.fixer.io/api/'

  constructor(private httpClient: HttpClient) { }

  getRates() {

    return this.httpClient.get(this.baseURL + "latest?access_key=" + this.access_key)

  }

  currencySymbols() {

    return this.httpClient.get(this.baseURL + "symbols?access_key=" + this.access_key);

  }
}