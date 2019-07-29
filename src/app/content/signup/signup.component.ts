import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IStore } from '@store/index';
import { SignUp } from '@store/actions/auth.action';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ValidatorsService } from '@shared/services/validators.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm!: FormGroup;
  public commonValidators: ValidatorFn[] = [Validators.required,
    Validators.minLength(6)];


  public constructor(
    private _store: Store<IStore>,
    private fb: FormBuilder,
    private validatorsService: ValidatorsService,
  ) {
  }

  public ngOnInit(): void {
    this.signupForm = this.fb.group({
      username: ['', [
        ...this.commonValidators,
        this.validatorsService.usernameValidator
      ], [this.validatorsService.username]],
      emails: this.fb.array([['', this.commonValidators]]),
      male: [true],
      password: this.fb.group({
        password: this.fb.control('', this.commonValidators),
        cpassword: this.fb.control('', this.commonValidators)
      }, {
        validator: this.validatorsService.equalValidator
      })
    });
  }

  public getControls(control: AbstractControl, path: string): AbstractControl[] {
    return (control.get(path) as FormArray).controls;
  }

  public removeEmail(index: number): void {
    (this.signupForm.get('emails') as FormArray).removeAt(index);
  }

  public addEmail(): void {
    (this.signupForm.get('emails') as FormArray).push(this.fb.control(''));
  }

  public signup(value: any): void {
    const {password: passwordGroup, ...user} = value;
    const {emails, ...currentUser} = user;
    const userToSinnup: any = {...currentUser, password: passwordGroup.password, email: emails[0]};
    console.log(userToSinnup);
    this._store.dispatch(new SignUp(userToSinnup));
  }
}
