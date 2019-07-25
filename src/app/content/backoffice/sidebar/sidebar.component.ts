import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output()
  public setSidenavControl = new EventEmitter();

  @ViewChild('drawer', {static: true})
  public drawer: MatSidenav;

  ngOnInit() {
    this.setSidenavControl.emit(this.drawer);
  }

}
