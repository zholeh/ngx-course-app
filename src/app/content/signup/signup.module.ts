import { NgModule } from '@angular/core';
import { SignupComponent } from './signup.component';
import { SharedModule } from '@shared/shared.module';
import { SignUpRoutingModule } from './signup-routing.module';
import { FormsModule } from '@angular/forms';
import { SwitcherComponent } from './switcher/switcher.component';


@NgModule({
  declarations: [SignupComponent, SwitcherComponent],
  imports: [
    SharedModule, SignUpRoutingModule, FormsModule
  ]
})
export class SignupModule {
}
