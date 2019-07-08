import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { SharedModule } from '../../shared/shared.module';
import { ProductsFilterPipe } from './products-filter.pipe';
import { ProductCardComponent } from './product-card/product-card.component';
import { CardConfirmModalComponent } from './product-card/card-confirm-modal/card-confirm-modal.component';
import { ProductsService } from './products.service';
import { HttpClient } from "@angular/common/http";

@NgModule({
  declarations: [ProductsComponent, ProductCardComponent, ProductsFilterPipe, CardConfirmModalComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  entryComponents: [CardConfirmModalComponent],
  providers: [{provide: ProductsService, useClass: ProductsService, deps: [HttpClient]}],
  exports: [
    ProductsComponent
  ]
})
export class ProductsModule {
}
