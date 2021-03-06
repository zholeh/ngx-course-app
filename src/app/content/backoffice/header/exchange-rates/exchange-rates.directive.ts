import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appExchangeRates]'
})
export class ExchangeRatesDirective implements OnInit {


  @Input('appExchangeRates')
  public set interval(ms: number) {
    if (!ms) {
      return;
    }
    this.ms = ms;
  }

  @Input('appExchangeRatesFrom')
  public rates!: { value: number, currency: string }[];


  @Input('appExchangeRatesAutoplay')
  public set playAuto(mode: 'on' | 'off') {
    if (!mode) {
      return;
    }
    this.autoplay = mode;
  }

  public context: any | null = null;
  public index: number = 0;

  public ms: number = 2000;
  public autoplay: 'off' | 'on' = 'on';

  private intervalID!: number | null;

  public constructor(
    private tpl: TemplateRef<any>,
    private vcr: ViewContainerRef
  ) {
  }


  public ngOnInit(): void {
    this.context = {
      $implicit: this.rates[0],
      controller: {
        next: () => this.next(),
        prev: () => this.prev()
      }
    };

    this.vcr.createEmbeddedView(this.tpl, this.context);
    this.resetInterval();
  }


  public next(): void {
    this.resetInterval();
    this.index++;
    if (this.index >= this.rates.length) {
      this.index = 0;
    }
    this.context.$implicit = this.rates[this.index];
  }

  public prev(): void {
    this.resetInterval();
    this.index--;
    if (this.index < 0) {
      this.index = this.rates.length - 1;
    }
    this.context.$implicit = this.rates[this.index];
  }


  private resetInterval(): void {
    if (this.autoplay !== 'on') {
      return;
    }
    this.clearInterval()
      .initInterval();
  }

  private initInterval(): void {
    this.intervalID = setInterval(() => {
      this.next();
    }, this.ms);
  }

  private clearInterval(): ExchangeRatesDirective {
    if (this.intervalID) {
      clearInterval(this.intervalID);
    }
    return this;
  }
}
