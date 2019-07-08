import { Observable } from 'rxjs';
import { IProduct } from '../../mock';
import { HttpClient } from '@angular/common/http';

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
