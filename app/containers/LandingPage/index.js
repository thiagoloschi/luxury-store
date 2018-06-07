import React from 'react';
import FarfetchLogo from 'assets/images/farfetch.svg';
import TopBar from 'components/TopBar';
import ProductList from 'components/ProductList';
import { mockedProducts } from './mocked';

export default class LandingPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <TopBar logo={FarfetchLogo} />
        <ProductList products={mockedProducts} />
      </div>
    );
  }
}
