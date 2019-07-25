import {
  Component, HostListener,
  Input, OnInit,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatSidenav } from '@angular/material';
import { Observable } from 'rxjs';
import { totalPrice, trueProductsCount } from '../../../store/reducers/cart.reducer';
import { Store } from '@ngrx/store';
import { IStore } from '../../../store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  public title: string;

  @Input()
  public drawer: MatSidenav;

  public headerTitleColor = this.sanitizer.bypassSecurityTrustStyle('color: orange');

  public rates = [{value: 1, currency: 'USD'}, {value: 10, currency: 'EUR'}, {value: 14, currency: 'RUB'}];
  public totalCount$!: Observable<number>;
  public isOpen: boolean = false;

  public constructor(
    private sanitizer: DomSanitizer,
    private store: Store<IStore>
  ) {
  }


  @HostListener('window:click', ['$event'])
  public handleClick(e): void {
    const isInCart: boolean | null = e.target.closest('.cart')
      // || e.target.matches('.remove')
      // || e.target.matches('.decrement')
      // || e.target.matches('.increment');
    if (isInCart) {
      return;
    }
    this.isOpen = false;
  }

  public ngOnInit(): void {
    this.totalCount$ = this.store.select(trueProductsCount);
  }

  public toggleSidenav(): void {
    this.drawer.toggle();
  }

}
