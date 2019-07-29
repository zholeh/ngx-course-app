import { Component } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.css']
})
export class BackofficeComponent  {

  public title: string = 'ng060619';
  public drawer!: MatSidenav;

  public setSidenav(drawer: MatSidenav): void {
    Promise.resolve().then(() => this.drawer = drawer);
  }

}
