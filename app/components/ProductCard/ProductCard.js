import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
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

export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  height: 70%;
  background-image: url(${({ avatarUrl }) => avatarUrl});
  background-color: #f6f6f6;
  background-position: 50% 35%;
  background-size: 155%;
  background-repeat: no-repeat;
  will-change: background-image;
  will-change: background-size;
  transition: 1s all ease;
  
  &:hover {
    background-image: url(${({ alternateImgUrl }) => alternateImgUrl});
    background-size: 200%;
    overflow: auto;
    transition: 1s all ease;
  }
`;

export const ProductCard = ({ product, color }) => {
  const { shortDescription, price, brand, images } = product;
  const { name } = brand;
  const avatar = images[2].url;
  const alternate = images[3].url;

  return (
    <DefaultCardWrapper color={color}>
      <Avatar alternateImgUrl={alternate} avatarUrl={avatar}></Avatar>
      <DescriptionWrapper>
        <ProductName>
          <FormattedMessage {...messages.name} values={{ name }} tagName="p" />
        </ProductName>
        <ProductDescription>
          <FormattedMessage {...messages.description} values={{ shortDescription }} tagName="p" />
        </ProductDescription>
        <ProductPrice>
          <FormattedMessage {...messages.price} values={{ price }} tagName="p" />
        </ProductPrice>
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
