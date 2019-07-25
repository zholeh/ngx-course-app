import { Component, Input } from '@angular/core';

import { IProduct } from '../../../../../../store/reducers/products.reducer';

@Component({
  selector: 'app-card-confirm-modal',
  templateUrl: './card-confirm-modal.component.html',
  styleUrls: ['./card-confirm-modal.component.css']
})
export class CardConfirmModalComponent {


  @Input()
  public product: IProduct;


}
