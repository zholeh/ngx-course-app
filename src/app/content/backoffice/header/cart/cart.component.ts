import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  ICartProduct,
  productsWithBonuses,
  totalPrice,
  trueProductsCount,
} from '../../../../store/reducers/cart.reducer';
import { IStore } from '../../../../store';
import {
  DecrementProductInCart,
  IncrementProductInCart,
  RemoveProductFromCart,
} from '../../../../store/actions/cart.actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products$!: Observable<ICartProduct[]>;
  public totalPrice$!: Observable<number>;
  public totalCount$!: Observable<number>;

  public constructor(private store: Store<IStore>) {}

  public ngOnInit(): void {
    this.products$ = this.store.select(productsWithBonuses);
    this.totalPrice$ = this.store.select(totalPrice);
    this.totalCount$ = this.store.select(trueProductsCount);

  }

  public removeProduct(product: ICartProduct): void {
    this.store.dispatch(new RemoveProductFromCart(product));
  }

  public incrementProduct(product: ICartProduct): void {
    this.store.dispatch(new IncrementProductInCart(product));
  }

  public decrementProduct(product: ICartProduct): void {
    this.store.dispatch(new DecrementProductInCart(product));
  }
}
