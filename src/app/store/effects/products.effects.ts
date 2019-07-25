import { Injectable } from '@angular/core';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { GET_PRODUCTS_PENDING, GetProductsError, GetProductsSuccess } from '../actions/products.actions';
import { IProduct } from '../reducers/products.reducer';
import { of } from 'rxjs';
import { ProductsService } from '../../content/backoffice/content/products/products.service';

@Injectable()
export class ProductsEffects {
    @Effect()
    public loadMovies$: any = this.actions$.pipe(
        ofType(GET_PRODUCTS_PENDING),
        switchMap(() =>
            this.productsService.getProducts().pipe(
                map((products: IProduct[]) => new GetProductsSuccess(products)),
                catchError((err: any) => of(new GetProductsError(err)))
            )
        )
    );

    public constructor(private actions$: Actions, private productsService: ProductsService) {}
}
