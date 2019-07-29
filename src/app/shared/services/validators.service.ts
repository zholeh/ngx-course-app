
import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable()
export class ValidatorsService {


  public equalValidator(control: AbstractControl): ValidationErrors | null {
    const [password, cpassword] = Object.values(control.value);
    return password !== cpassword
      ? {
        'Passwords do not match': true
      }
      : null;
  }

  public usernameValidator(control: AbstractControl): ValidationErrors | null {
    const valid: boolean = /^[a-zA-Z]*$/.test(control.value);
    return valid
      ? null
      : {
        'Only letters': true
      };
  }

  public username(control: AbstractControl): Observable<ValidationErrors | null> {
    return of(control.value)
      .pipe(
        delay(5000),
        map((v: string) => {
          return v === 'superman'
            ? {
              'user exist': true
            }
            : null;
        })
      );

  }
}
