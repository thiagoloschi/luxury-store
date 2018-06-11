import React from 'react';
import { shallow } from 'enzyme';
import { mockedProduct } from 'utils/mockedProduct';
import ProductCard from 'components/ProductCard';
import {
    ProductList,
    ProductsWrapper,
    ListWrapper,
} from '../ProductList';

const mockedListOfProducts = [mockedProduct, mockedProduct];
const defaultProps = {
  products: mockedListOfProducts,
};

const render = (props) => shallow(<ProductList {...props} {...defaultProps} />);

describe('<ProductList />', () => {
  it('should render a Product list with the correct props', () => {
    const productList = render();
    expect(productList.containsMatchingElement(
      <ListWrapper>
        <ProductsWrapper>
          <ProductCard product={mockedProduct} />
          <ProductCard product={mockedProduct} />
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
