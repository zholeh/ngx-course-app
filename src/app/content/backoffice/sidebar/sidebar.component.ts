import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output()
  public setSidenavControl: EventEmitter<MatSidenav> = new EventEmitter();

  @ViewChild('drawer', {static: true})
  public drawer!: MatSidenav;

  public ngOnInit(): void {
    this.setSidenavControl.emit(this.drawer);
  }

}
