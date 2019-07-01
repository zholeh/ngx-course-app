import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../mock';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input()
  public product: IProduct;

  constructor() {
  }

  ngOnInit() {
  }

}
