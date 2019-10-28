import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-exchange-rates',
  templateUrl: './exchange-rates.component.html'
})
export class ExchangeRatesComponent {

  @Input()
  public rates!: { value: number, currency: string };

}
