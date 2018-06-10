import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ProductCard from 'components/ProductCard';

export const ListWrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  width: 90%;
  margin: auto;
  padding-bottom: 56px;
`;

export const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 1040px) {
    justify-content: center;
  }
`;

export const ProductList = ({ products }) => {
  const listOfProduct = products.map((product) => (
    <ProductCard
      key={product.id}
      product={product}
    />
  ));

  return (
    <ListWrapper>
      <ProductsWrapper>
        {listOfProduct}
      </ProductsWrapper>
    </ListWrapper>
  );
};

ProductList.propTypes = {
  products: PropTypes.array,
};

export default ProductList;
