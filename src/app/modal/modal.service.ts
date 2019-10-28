import {  Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class ModalService {
  private _modalSequence$$: Subject<any> = new Subject();

  public open(componentObj: { component: any; resolver: any; injector: any; context: any }): void {
    this._modalSequence$$.next(componentObj);
  }

  public close(): void {
    this._modalSequence$$.next({});
  }

  public get modalSequence$(): Observable<any> {
    return this._modalSequence$$.asObservable();
  }
}
