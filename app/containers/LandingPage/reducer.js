import { fromJS } from 'immutable';
import { FETCH_PRODUCTS } from './constants';

export const initialState = fromJS({
  productsInfo: {
    entries: [],
  },
});

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return state.merge({ productsInfo: action.productsInfo });
    default:
      return state;
  }
};
