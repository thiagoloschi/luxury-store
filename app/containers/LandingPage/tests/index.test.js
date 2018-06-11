import React from 'react';
import { shallow } from 'enzyme';
import FarfetchLogo from 'assets/images/farfetch.svg';
import { mockedProduct } from 'utils/mockedProduct';
import TopBar from 'components/TopBar';
import ProductList from 'components/ProductList';
import { LandingPage, mapDispatchToProps } from '../LandingPage';
import { PageInfo } from '../PageInfo';
import { doProductsFetching } from '../actions';

let renderedComponent;
const render = (props) => shallow(<LandingPage {...props} />);
const defaultProps = {
  products: [mockedProduct, mockedProduct],
  fetchProducts: jest.fn(),
};

beforeAll(() => {
  renderedComponent = render(defaultProps);
});

describe('<LandingPage />', () => {
  describe('componentDidMount', () => {
    it('should call fetchProducts when the component mounts', () => {
      renderedComponent.instance().componentDidMount();
      expect(defaultProps.fetchProducts).toHaveBeenCalled();
    });
  });

  describe('render', () => {
    it('should render the landing page with the right props', () => {
      expect(renderedComponent.containsMatchingElement(
        <div>
          <TopBar logo={FarfetchLogo} />
          <PageInfo />
          <ProductList products={defaultProps.products} />
        </div>
      )).toEqual(true);
    });
  });

  describe('mapDispatchToProps', () => {
    const dispatch = jest.fn();
    const dispatchProps = mapDispatchToProps(dispatch);

    describe('dispatchProps', () => {
      it('should have dispatchProps defined', () => {
        expect(dispatchProps.fetchProducts).toBeDefined();
      });
    });

    describe('fetchProducts', () => {
      it('should dispatch doProductsFetching correctly', () => {
        dispatchProps.fetchProducts();
        expect(dispatch).toHaveBeenCalledWith(doProductsFetching());
      });
    });
  });
});

