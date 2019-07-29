import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IStore } from '@store/index';
import { Login } from '@store/actions/auth.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public constructor(private _store: Store<IStore>) {
  }

  public login(userData: { username: string; password: string }): void {
    this._store.dispatch(new Login(userData));
  }
}
