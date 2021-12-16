import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RatesService } from './rates.service';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
})
export class RatesComponent implements OnInit {

  rates = [];
  result;
  mainCurrencies = ['USD', 'EUR', 'RUB', 'GBP'];
  AMDrates = [];
  currencySymbols = {};
  symbolsArray = [];
  symbolKeys = [];
  ratesForm: FormGroup;

  constructor(private ratesService: RatesService) { }

  ngOnInit(): void {

    this.ratesForm = new FormGroup({
      'from': new FormControl(null, Validators.required),
      'to': new FormControl(null, Validators.required),
      'amount': new FormControl(100, Validators.required),
      'result': new FormControl,
    });

    this.ratesService.getRates().subscribe(data => {
      this.rates = data["rates"];
      this.mainCurrencies.forEach(item => {
        let num = this.rates['AMD'] / this.rates[item]
        this.AMDrates.push({
          currencyCode: item,
          currencyValue: num.toFixed(1)
        })
      })
    })

    this.ratesService.currencySymbols().subscribe(data => {
      this.currencySymbols = data['symbols']
      this.symbolKeys = Object.keys(this.currencySymbols)
      for (var i = 0; i < this.symbolKeys.length; i++) {
        this.symbolsArray.push({
          currencyCode: this.symbolKeys[i],
          country: this.currencySymbols[this.symbolKeys[i]]
        });
      }
    })

  }

  onSubmit() {
    let from = this.ratesForm.value.from
    let to = this.ratesForm.value.to
    let amount = this.ratesForm.value.amount
    let count = this.rates[to] / this.rates[from] * amount
    this.result = count.toFixed(1)
  }

}