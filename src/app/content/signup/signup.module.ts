import { NgModule } from '@angular/core';
import { SignupComponent } from './signup.component';
import { SharedModule } from '@shared/shared.module';
import { SignUpRoutingModule } from './signup-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [SignupComponent],
  imports: [
    SharedModule, SignUpRoutingModule, FormsModule
  ]
})
export class SignupModule {
}
