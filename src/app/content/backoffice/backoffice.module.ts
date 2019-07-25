import { NgModule } from '@angular/core';
import { BackofficeComponent } from './backoffice.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from '@shared/shared.module';
import { ExchangeRatesDirective } from './header/exchange-rates/exchange-rates.directive';
import { ExchangeRatesComponent } from './header/exchange-rates/exchange-rates.component';
import { HiddenDirective } from './header/exchange-rates/hidden.directive';
import { BackoffficeRoutingModule } from './backoffice-routing.module';
import { CartComponent } from './header/cart/cart.component';
import { ProductComponent } from './header/cart/product/product.component';


@NgModule({
  declarations: [
    BackofficeComponent,
    HeaderComponent,
    SidebarComponent,
    ExchangeRatesDirective,
    ExchangeRatesComponent,
    HiddenDirective,
    CartComponent,
    ProductComponent,
  ],
  imports: [SharedModule, BackoffficeRoutingModule]
})
export class BackofficeModule {
}
