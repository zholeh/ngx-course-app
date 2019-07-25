import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from '@modal/modal.module';
import { AppRoutingModule } from './app-routing.module';
import { PreloadService } from './preload.service';
import { reducers } from './store';
import { StoreModule } from '@ngrx/store';
import { environment } from '@env/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ProductsEffects } from './store/effects/products.effects';
import { EffectsModule } from '@ngrx/effects';
import { ProductsService } from './content/backoffice/content/products/products.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    environment.production ? [] : StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([ProductsEffects]),
  ],
  providers: [PreloadService, ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
