import { NgModule } from '@angular/core';
import { BackofficeComponent } from './backoffice.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from '@shared/shared.module';
import { ExchangeRatesDirective } from './header/exchange-rates/exchange-rates.directive';
import { ExchangeRatesComponent } from './header/exchange-rates/exchange-rates.component';
import { HiddenDirective } from './header/exchange-rates/hidden.directive';
import { BackoffficeRoutingModule } from './backoffice-routing.module';
import { ProductResolveService } from "./content/products/one-product/product-resolve.service";


@NgModule({
  declarations: [
    BackofficeComponent,
    HeaderComponent,
    SidebarComponent,
    ExchangeRatesDirective,
    ExchangeRatesComponent,
    HiddenDirective,
  ],
  imports: [SharedModule, BackoffficeRoutingModule]
})
export class BackofficeModule {
}
