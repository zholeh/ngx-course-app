import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { switchMap, take } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { IStore } from '@store/index';
import { Store } from '@ngrx/store';

@Injectable()
export class AuthGuardService implements CanActivate {
  public constructor(
    private _router: Router,
    private _store: Store<IStore>
  ) {
  }

  public canActivate(_activatedRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const url: string = state.url;
    return this._store
      .select((store: any) => store.auth.isLogged)
      .pipe(
        take(1),
        switchMap((isLogged: boolean) => {
          if (!isLogged && (url === '/login' || url === '/signup')) {
            return of(true);
          }

          if (isLogged && (url === '/login' || url === '/signup')) {
            this._router.navigate(['/backoffice']);
            return of(false);
          }

          if (!isLogged) {
            this._router.navigate(['/login']);
          }
          return of(isLogged);
        })
      );
  }
}
