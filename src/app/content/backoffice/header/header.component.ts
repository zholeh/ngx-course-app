import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit, SimpleChanges
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input()
  public title: string;

  @Input()
  public drawer: MatSidenav;

  public headerTitleColor = this.sanitizer.bypassSecurityTrustStyle('color: orange');

  public rates = [{value: 1, currency: 'USD'}, {value: 10, currency: 'EUR'}, {value: 14, currency: 'RUB'}];

  constructor(
    private sanitizer: DomSanitizer
  ) {
  }

  public toggleSidenav(): void {
    this.drawer.toggle();
  }

}
