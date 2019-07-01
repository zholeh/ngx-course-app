import { of } from 'rxjs/internal/observable/of';
import { delay } from 'rxjs/operators';

export interface IProduct {
  title: string;
  img: string;
  price: number;
  author: string;
  isFavorite: boolean;
}

export const products = [
  {
    _id: 1,
    title: 'Product 1',
    img: 'https://loremflickr.com/320/240',
    price: 200,
    author: 'Igor',
    isFavorite: true
  },
  {
    _id: 2,
    title: 'Product 2345',
    img: 'https://loremflickr.com/320/240',
    price: 221,
    author: 'Vlad',
    isFavorite: false
  },
  {
    _id: 3,
    title: 'Product 234',
    img: 'https://loremflickr.com/320/240',
    price: 333,
    author: 'Igor',
    isFavorite: true
  },
  {
    title: 'Product 111',
    img: 'https://loremflickr.com/320/240',
    price: 2345,
    author: 'Igor',
    isFavorite: false
  },
  {
    _id: 4,
    title: 'Product 231',
    img: 'https://loremflickr.com/320/240',
    price: 23,
    author: 'Vlad',
    isFavorite: true
  },
  {
    _id: 5,
    title: 'Product 41',
    img: 'https://loremflickr.com/320/240',
    price: 2344,
    author: 'Lena',
    isFavorite: false
  },
  {
    _id: 6,
    title: 'Product 31',
    img: 'https://loremflickr.com/320/240',
    price: 334,
    author: 'Lena',
    isFavorite: false
  },
  {
    _id: 7,
    title: 'Product 11',
    img: 'https://loremflickr.com/320/240',
    price: 22,
    author: 'Igor',
    isFavorite: false
  },
  {
    _id: 8,
    title: 'Product 122',
    img: 'https://loremflickr.com/320/240',
    price: 1200,
    author: 'Max',
    isFavorite: true
  }
];
export const products$ = of(products)
  .pipe(delay(3000));
