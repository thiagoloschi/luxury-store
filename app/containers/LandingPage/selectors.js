import { createSelector } from 'reselect';

const selectProduct = (state) => state.get('product');

const makeSelectProductInfo = () => createSelector(
  selectProduct,
  (state) => state.get('productsInfo')
);

const makeSelectProducts = () => createSelector(
  selectProduct,
  (state) => state.getIn(['productsInfo', 'entries']).toJS()
);

export {
  selectProduct,
  makeSelectProductInfo,
  makeSelectProducts,
};
