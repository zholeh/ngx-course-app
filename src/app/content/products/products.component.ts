import { Component } from '@angular/core';
import { MatCheckboxChange } from '@angular/material';
import { Observable } from 'rxjs';
import { IProduct, products$ } from '../../mock';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  public searchTerm: string = '';
  public onlyFavorites: boolean = false;
  public products$: Observable<IProduct[]>;

  public constructor(
    private _productsService: ProductsService
  ) {

  }

  public ngOnInit(): void {
   this.products$ = this._productsService.getProducts();
  }

  public trackByFn(index: number, item: IProduct): number {
    return item._id;
  }

  public toggleOnlyFavorites(e: MatCheckboxChange): void {
    console.log(e);
    this.onlyFavorites = e.checked;
  }
}
