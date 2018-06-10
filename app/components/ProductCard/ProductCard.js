import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Dimens from 'assets/dimensions';
import Colors from 'assets/colors';
import messages from './messages';
import {
  DescriptionWrapper,
  ProductName,
  ProductDescription,
  ProductPrice,
} from './ProductInfo';

export const DefaultCardWrapper = styled.div`
  padding: ${Dimens.defaultSpace};
  margin: 4px;
  height: ${Dimens.productCardHeight};
  width: ${Dimens.productCardWidth};
  background-color: ${({ color }) => color};
`;

export const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 80%;
`;

export const Avatar = styled.img`
  height: 300px;
`;

export const ProductCard = ({ product, color }) => {
  const { shortDescription, price, brand, images } = product;
  const { name } = brand;
  const avatar = images[0].url;

  return (
    <DefaultCardWrapper color={color}>
      <AvatarWrapper>
        <Avatar src={avatar} />
      </AvatarWrapper>
      <DescriptionWrapper>
        <ProductName {...messages.name} values={{ name }} />
        <ProductDescription {...messages.description} values={{ shortDescription }} />
        <ProductPrice {...messages.price} values={{ price }} />
      </DescriptionWrapper>
    </DefaultCardWrapper>
  );
};

ProductCard.propTypes = {
  product: PropTypes.objectOf({
    priceWithoutDiscount: PropTypes.number,
    shortDescription: PropTypes.string,
    price: PropTypes.number,
    brand: PropTypes.objectOf({
      id: PropTypes.number,
      name: PropTypes.string.isRequired,
      priceType: PropTypes.number,
    }),
    images: PropTypes.arrayOf({
      size: PropTypes.string,
      url: PropTypes.string.isRequired,
    }),
    id: PropTypes.number,
    promotionPercentage: PropTypes.number,
  }),
  color: PropTypes.string,
};

ProductCard.defaultProps = {
  color: Colors.white,
};

export default ProductCard;
