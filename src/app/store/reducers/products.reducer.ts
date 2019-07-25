import {
  GetProductsSuccess,
  ProductsActions,
} from '../actions/products.actions';

export interface IProduct {
    _id: number;
    title: string;
    img: string;
    price: number;
    author: string;
}

const initialState: IProduct[] = [];

export function productsReducer(state: IProduct[] = initialState, action: ProductsActions): IProduct[] {
  if (action instanceof  GetProductsSuccess) {
    return action.payload;
  }
  return state;
}
