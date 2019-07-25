import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  public signup(value: any): void {
    const {password: passwordGroup, ...user} = value;
    console.log(passwordGroup, user);
  }
}
