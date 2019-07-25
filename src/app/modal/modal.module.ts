
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ModalComponent } from './modal.component';
import { ModalService } from './modal.service';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [ModalComponent],
  imports: [SharedModule],
  exports: [ModalComponent],
})
export class ModalModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: ModalModule,
      providers: [ModalService],
    };
  }
}
