import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ExchangeRatesDirective } from './header/exchange-rates/exchange-rates.directive';
import { ExchangeRatesComponent } from './header/exchange-rates/exchange-rates.component';
import { HiddenDirective } from './header/exchange-rates/hidden.directive';
import { ModalModule } from './modal/modal.module';
import { ProductsModule } from './content/products/products.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InterceptorService } from './interceptor.service';
import { BASE_URL_TOKEN } from './config';
import { environment } from '@env/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ExchangeRatesDirective,
    ExchangeRatesComponent,
    HiddenDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    ProductsModule,
    ModalModule.forRoot(),
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
    {
      provide: BASE_URL_TOKEN,
      useValue: environment.baseUrl,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

// Module/Directive/Pipe/Service
// NgModule => es6 module
// declarations => let/const  // directive, pipe
// imports = import;
// exports = export;  directive, pipe , module
