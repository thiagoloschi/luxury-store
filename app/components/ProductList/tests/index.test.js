import React from 'react';
import { shallow } from 'enzyme';
import ProductCard from 'components/ProductCard';
import {
    ProductList,
    ProductsWrapper,
    ListWrapper,
} from '../ProductList';

const mockedMsg = {
  id: 'product id',
  defaultMessage: 'this is a very nice product',
};
const mockedProduct = {
  avatar: 'some img url goes here',
  name: mockedMsg,
  description: mockedMsg,
  price: mockedMsg,
};
const mockedListOfProducts = [mockedProduct, mockedProduct];
const defaultProps = {
  products: mockedListOfProducts,
};

const render = (props) => shallow(<ProductList {...props} {...defaultProps} />);

describe('<ProductList />', () => {
  it('should render a Product card with the correct props', () => {
    const productList = render();
    expect(productList.containsMatchingElement(
      <ListWrapper>
        <ProductsWrapper>
          <ProductCard {...mockedProduct} />
          <ProductCard {...mockedProduct} />
        </ProductsWrapper>
      </ListWrapper>
    )).toBeTruthy();
  });

  it('should render the correct amount of products', () => {
    const expectedAmountOfProducts = defaultProps.products.length;
    const productList = render();
    expect(productList.find(ProductCard).exists()).toBeTruthy();
    expect(productList.find(ProductCard)).toHaveLength(expectedAmountOfProducts);
  });
});
