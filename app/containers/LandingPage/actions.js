import payload from './data/data.json';
import {
  FETCH_PRODUCTS,
} from './constants';

export function doProductsFetching() {
  return {
    type: FETCH_PRODUCTS,
    productsInfo: payload.products, // mocks the fetch strategy. Would have a promise here fetching from the backend.
  };
}
