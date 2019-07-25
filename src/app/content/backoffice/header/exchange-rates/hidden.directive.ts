import {  Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHidden]',
  exportAs: 'hiddenControl'
})
export class HiddenDirective  {

  @HostBinding('style.visibility')
  public visibility = 'hidden';

  public show(): void {
    this.visibility = 'visible';
  }

  public hide(): void {
    this.visibility = 'hidden';
  }
}
