import { IProduct } from './products.reducer';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import {
  AddProductToCart,
  CartProductsActions,
  DecrementProductInCart,
  IncrementProductInCart,
  RemoveProductFromCart,
} from '../actions/cart.actions';
import { createFeatureSelector, createSelector, MemoizedSelector, Selector } from '@ngrx/store';
import { IStore } from '../index';
import { IUser } from './user.reducer';

export interface ICartProduct extends IProduct {
    count: number;
}

export const adapter: EntityAdapter<ICartProduct> = createEntityAdapter({
  selectId: (product: ICartProduct) => product._id
});
const initialState: EntityState<ICartProduct> = adapter.getInitialState([]);

export function cartReducer(
    state: EntityState<ICartProduct> = initialState,
    actions: CartProductsActions
): EntityState<ICartProduct> {
  if (actions instanceof AddProductToCart) {
    const entity: ICartProduct = state.entities[actions.payload._id];
    return adapter.upsertOne(
      {
        ...actions.payload,
        count: entity ? entity.count + 1 : 1,
      },
      state
    );
  }
  if (actions instanceof RemoveProductFromCart) {
    return adapter.removeOne(actions.payload._id, state);
  }
  if (actions instanceof IncrementProductInCart) {
    return adapter.updateOne(
      {
        id: actions.payload._id,
        changes: { count: actions.payload.count + 1 },
      },
      state
    );
  }
  if (actions instanceof DecrementProductInCart) {
    return adapter.updateOne(
      {
        id: actions.payload._id,
        changes: { count: actions.payload.count - 1 },
      },
      state
    );
  }
  return state;

}

export const { selectAll } = adapter.getSelectors(createFeatureSelector('cart'));
export const userSelector: Selector<IStore, IUser> = (state: IStore) => state.user;
export const productsWithBonuses: MemoizedSelector<IStore, ICartProduct[]> = createSelector(
    userSelector,
    selectAll,
    (user: IUser, products: ICartProduct[]) => {
        return products.map((product: ICartProduct) => {
            return {
                ...product,
                price: product.price * user.bonuses,
            };
        });
    }
);

export const trueProductsCount: MemoizedSelector<IStore, number> = createSelector(
    productsWithBonuses,
    (products: ICartProduct[]) => {
        return products.reduce((count: number, product: ICartProduct) => {
            return (count += product.count);
        }, 0);
    }
);

export const totalPrice: MemoizedSelector<IStore, number> = createSelector(
    productsWithBonuses,
    (products: ICartProduct[]) => {
        return products.reduce((price: number, product: ICartProduct) => {
            return (price += product.price * product.count);
        }, 0);
    }
);
