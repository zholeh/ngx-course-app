import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../../../../store/reducers/products.reducer';


@Injectable()
export class ProductsService {
  public constructor(private http: HttpClient) {}

  public getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`/products`);
  }

  public getProduct(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`/products/${id}`);
  }
}
