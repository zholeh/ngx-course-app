import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import { SharedModule } from '@shared/shared.module';
import { ProductsFilterPipe } from './products-filter.pipe';
import { ProductCardComponent } from './product-card/product-card.component';
import { CardConfirmModalComponent } from './product-card/card-confirm-modal/card-confirm-modal.component';

import { ProductsRoutingModule } from './products-routing.module';
import { OneProductComponent } from './one-product/one-product.component';
import { ProductResolveService } from './one-product/product-resolve.service';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductCardComponent,
    ProductsFilterPipe,
    CardConfirmModalComponent,
    OneProductComponent],
  imports: [
    ProductsRoutingModule,
    SharedModule
  ],
  entryComponents: [CardConfirmModalComponent],
  providers: [ProductResolveService],
})
export class ProductsModule {
}
