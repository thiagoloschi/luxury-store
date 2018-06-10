import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import injectReducer from 'utils/injectReducer';
import FarfetchLogo from 'assets/images/farfetch.svg';

import TopBar from 'components/TopBar';
import ProductList from 'components/ProductList';

import reducer from './reducer';
import { makeSelectProducts } from './selectors';
import { doProductsFetching } from './actions';

export class LandingPage extends React.PureComponent {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { products } = this.props;
    return (
      <div>
        <TopBar logo={FarfetchLogo} />
        <ProductList products={products} />
      </div>
    );
  }
}

LandingPage.propTypes = {
  products: PropTypes.array,
  fetchProducts: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  products: makeSelectProducts(),
});

export const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(doProductsFetching()),
});

export default compose(
  injectReducer({ key: 'product', reducer }),
  connect(mapStateToProps, mapDispatchToProps),
)(LandingPage);
