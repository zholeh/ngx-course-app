import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-exchange-rates',
  templateUrl: './exchange-rates.component.html',
  styleUrls: ['./exchange-rates.component.css']
})
export class ExchangeRatesComponent implements OnInit {

  @Input()
  public rates;

  constructor() {
  }

  ngOnInit() {
  }

}
