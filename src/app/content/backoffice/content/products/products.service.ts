import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../../../../mock';

export class ProductsService {

  public constructor(
    private _http: HttpClient
  ) {
    console.log(_http);
  }

  public getProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>('/products', {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
