import { fromJS } from 'immutable';
import { mockedProduct } from 'utils/mockedProduct';
import reducer, { initialState } from '../reducer';
import { FETCH_PRODUCTS } from '../constants';

describe('Landing page reducer', () => {
  describe('case FETCH_PRODUCTS is dispatched', () => {
    const mockFetchProductsAction = {
      type: FETCH_PRODUCTS,
      productsInfo: { entries: [mockedProduct, mockedProduct, mockedProduct] },
    };

    it('should update state with the result of the fetch', () => {
      expect(reducer(initialState, mockFetchProductsAction)).toEqual(fromJS({
        productsInfo: { entries: [mockedProduct, mockedProduct, mockedProduct] },
      }));
    });
  });
});
