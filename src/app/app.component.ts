import { Component } from '@angular/core';
import { MatCheckboxChange, MatSidenav } from '@angular/material';
import { IProduct, products$ } from './mock';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title = 'ng060619';
  public drawer: MatSidenav;
  public searchTerm = '';
  public onlyFavorites = false


  public products$: Observable<IProduct[]> = products$;

  public setSidenav(drawer: MatSidenav): void {
    Promise.resolve().then(() => this.drawer = drawer);
  }

  public trackByFn(index, item) {
    return item.id; // or item.id
  }

  public toggleOnlyFavorites(e: MatCheckboxChange) {
    console.log(e);
    this.onlyFavorites = e.checked;
  }
}
