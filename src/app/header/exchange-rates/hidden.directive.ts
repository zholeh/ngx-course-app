import {  Directive, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[appHidden]',
  exportAs: 'hiddenControl'
})
export class HiddenDirective implements OnInit {

  @HostBinding('style.visibility')
  public visibility = 'hidden';


  public ngOnInit(): void {

  }

  public show(): void {
    this.visibility = 'visible';
  }

  public hide(): void {
    this.visibility = 'hidden';
  }
}
