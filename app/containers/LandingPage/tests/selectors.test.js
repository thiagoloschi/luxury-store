import { fromJS } from 'immutable';
import { selectProduct, makeSelectProductInfo, makeSelectProducts } from '../selectors';

describe('Landing Page selectors test', () => {
  describe('selectProduct', () => {
    it('should select the product state', () => {
      const product = fromJS({
        productsInfo: {
          entries: [{ name: 'beautiful product name' }],
          inCart: false,
        },
      });
      const mockState = fromJS({ product });
      expect(selectProduct(mockState)).toEqual(product);
    });
  });

  describe('makeSelectProductInfo', () => {
    const product = {
      productsInfo: {
        entries: [{ name: 'beautiful product name' }],
        inCart: false,
      },
    };
    it('should select info about the product', () => {
      const mockState = fromJS({ product });
      expect(makeSelectProductInfo()(mockState)).toEqual(fromJS(product.productsInfo));
    });
  });

  describe('makeSelectProducts', () => {
    const product = {
      productsInfo: {
        entries: [{ name: 'beautiful product name' }],
        inCart: false,
      },
    };
    it('should select the array of products', () => {
      const mockState = fromJS({ product });
      expect(makeSelectProducts()(mockState)).toEqual([{ name: 'beautiful product name' }]);
    });
  });
});

