import { IProduct, productsReducer } from './reducers/products.reducer';
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { EntityState } from '@ngrx/entity';
import { cartReducer, ICartProduct } from './reducers/cart.reducer';
import { authReducer, IAuthState } from '@store/reducers/auth.reducer';
import { ActivatedRouteSnapshot, Params, RouterStateSnapshot } from '@angular/router';
import * as fromRouter from '@ngrx/router-store';
import { AuthActions, AuthActionsType } from '@store/actions/auth.action';
import { IUser, userReducer } from '@store/reducers/user.reducer';

export interface IStore {
  products: IProduct[];
  cart: EntityState<ICartProduct>;
  auth: IAuthState;
  user: IUser;
  routerReducer?: fromRouter.RouterReducerState<IRouterStateUrl>;
}

// TODO  remove any !!!!!!!!!!;
export const reducers: ActionReducerMap<IStore, any> = {
  products: productsReducer,
  cart: cartReducer,
  auth: authReducer,
  user: userReducer,
  routerReducer: fromRouter.routerReducer,
};

export interface IRouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

export class CustomRouterSerializer implements fromRouter.RouterStateSerializer<IRouterStateUrl> {
  public serialize(routerState: RouterStateSnapshot): IRouterStateUrl {
    const {
      url,
      root: {queryParams},
    } = routerState;

    let state: ActivatedRouteSnapshot = routerState.root;
    while (state.firstChild) {
      state = state.firstChild;
    }
    const {params} = state;
    return {url, queryParams, params};
  }
}

export function logoutAndClearState(reducer: ActionReducer<IStore>): ActionReducer<IStore> {
  return (state: IStore | undefined, action: AuthActionsType): IStore => {
    if (action.type === AuthActions.LOGOUT_SUCCESS) {
      state = undefined;
    }
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<IStore>[] = [logoutAndClearState];
