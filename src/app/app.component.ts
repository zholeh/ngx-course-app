import { Component } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title: string = 'ng060619';
  public drawer: MatSidenav;

  public setSidenav(drawer: MatSidenav): void {
    Promise.resolve().then(() => this.drawer = drawer);
  }

}
