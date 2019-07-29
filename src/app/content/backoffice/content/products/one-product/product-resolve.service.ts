import { Injectable, Optional } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { IProduct } from "@store/reducers/products.reducer";


@Injectable()
export class ProductResolveService implements Resolve<IProduct | null> {

  public constructor(
    @Optional() private _router: Router,
    @Optional() private _http: HttpClient
  ) {
  }

  public resolve(route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<IProduct | null> {
    return this._http.get<IProduct>(`/products/${route.paramMap.get('id')}`)
      .pipe(
        map((product: IProduct | null) => {
          if (!product) {
            this._router.navigate(['/backoffice']);
            return product;
          }
          return product;
        }),
        catchError(() => {
          this._router.navigate(['/backoffice']);
          return of(null);
        })
      );
  }

}
