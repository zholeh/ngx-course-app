import { Component, ComponentFactoryResolver, Injector, Input } from '@angular/core';
import { CardConfirmModalComponent } from './card-confirm-modal/card-confirm-modal.component';
import { ModalService } from "@modal/modal.service";
import { AddProductToCart } from '../../../../../store/actions/cart.actions';
import { Store } from '@ngrx/store';
import { IStore } from '../../../../../store';
import { IProduct } from '../../../../../store/reducers/products.reducer';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {

  @Input()
  public product: IProduct;

  @Input()
  public isOdd: boolean;

  public constructor(
    private _modalService: ModalService,
    private _componentFactoryResolver: ComponentFactoryResolver,
    private _injector: Injector,
    private store: Store<IStore>
  ) {

  }


  public addToCart(product: IProduct): void {
    this._modalService.open({
      component: CardConfirmModalComponent,
      resolver: this._componentFactoryResolver,
      injector: this._injector,
      context: {
        product: {...product},
        save: () => {
          this.store.dispatch(new AddProductToCart(product));
          this._modalService.close();
        },

        close: () => {
          this._modalService.close();
        }
      },
    });
  }
}
