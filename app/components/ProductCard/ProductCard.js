import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Dimens from 'assets/dimensions';
import Colors from 'assets/colors';
import {
  DescriptionWrapper,
  ProductName,
  ProductDescription,
  ProductPrice,
} from './ProductInfo';

export const DefaultCardWrapper = styled.div`
  padding: ${Dimens.defaultSpace};
  background-color: ${({ color }) => color};
  height: ${Dimens.productCardHeight};
  width: ${Dimens.productCardWidth};
`;

export const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 80%;
`;

export const Avatar = styled.img`
  height: 300px;
`;

export const ProductCard = ({ avatar, color, name, description, price }) => (
  <DefaultCardWrapper color={color}>
    <AvatarWrapper>
      <Avatar src={avatar} />
    </AvatarWrapper>
    <DescriptionWrapper>
      <ProductName {...name} />
      <ProductDescription {...description} />
      <ProductPrice {...price} />
    </DescriptionWrapper>
  </DefaultCardWrapper>
);

ProductCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.object.isRequired,
  description: PropTypes.object.isRequired,
  price: PropTypes.object.isRequired,
  color: PropTypes.string,
};

ProductCard.defaultProps = {
  color: Colors.white,
};

export default ProductCard;
