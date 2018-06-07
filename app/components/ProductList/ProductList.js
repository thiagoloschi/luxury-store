import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ProductCard from 'components/ProductCard';

export const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;
  margin: auto;
`;

export const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 1040px) {
    justify-content: center;
  }
`;

export const ProductList = ({ products }) => {
  const listOfProduct = products.map(({ avatar, name, description, price }) => (
    <ProductCard
      avatar={avatar}
      name={name}
      description={description}
      price={price}
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
  products: PropTypes.arrayOf({
    avatar: PropTypes.string,
    name: PropTypes.object,
    description: PropTypes.object,
    price: PropTypes.object,
  }),
};

export default ProductList;
