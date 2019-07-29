import { Action } from '@ngrx/store';
import { IUser } from '../reducers/user.reducer';

export enum UserActions {
  SET_USER = '[USER] SET_USER ..',
}

export class SetUser implements Action {
  public readonly type: string = UserActions.SET_USER;

  public constructor(public payload: IUser) {
  }
}

export type UserActionsTypes = SetUser;
