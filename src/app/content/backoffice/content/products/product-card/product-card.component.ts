import { Component, ComponentFactoryResolver, Injector, Input } from '@angular/core';
import { IProduct } from '../../../../../mock';
import { CardConfirmModalComponent } from './card-confirm-modal/card-confirm-modal.component';
import { ModalService } from "@modal/modal.service";

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
          this._modalService.close();
        },

        close: () => {
          console.log('asdasd');
          this._modalService.close();
        }
      },
    });
  }
}
