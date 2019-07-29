import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IStore } from '@store/index';
import { GetProductsPending } from '@store/actions/products.actions';
import { IProduct } from '@store/reducers/products.reducer';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public searchTerm: string = '';
  public onlyFavorites: boolean = false;
  public products$!: Observable<IProduct[]>;

  public constructor(
    private store: Store<IStore>
  ) { }

  public ngOnInit(): void {
    this.products$ = this.store.select('products');
    this.store.dispatch(new GetProductsPending());
  }

  public trackByFn(_index: number, item: IProduct): number {
    return item._id;
  }

  public toggleOnlyFavorites(e: MatCheckboxChange): void {
    this.onlyFavorites = e.checked;
  }
}
