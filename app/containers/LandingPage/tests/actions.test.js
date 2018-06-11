
import payload from '../data/data.json';
import { doProductsFetching } from '../actions';
import { FETCH_PRODUCTS } from '../constants';


describe('LandingPage actions', () => {
  describe('doProductsFetching', () => {
    it('should have a type of FETCH_PRODUCTS', () => {
      expect(doProductsFetching().type).toEqual(FETCH_PRODUCTS);
    });
    it('should return productsInfo correctly', () => {
      expect(doProductsFetching().productsInfo).toEqual(payload.products);
    });
  });
});
