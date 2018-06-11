import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage, FormattedNumber } from 'react-intl';
import Dimens from 'assets/dimensions';
import Colors from 'assets/colors';
import messages from './messages';
import {
  DescriptionWrapper,
  ProductName,
  ProductDescription,
  ProductPrice,
  SalesProduct,
  FullPrice,
  SalePrice,
} from './ProductInfo';

export const DefaultCardWrapper = styled.div`
  padding: ${Dimens.defaultSpace};
  margin: 4px;
  height: ${Dimens.productCardHeight};
  width: ${Dimens.productCardWidth};
  cursor: pointer;
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
  will-change: background-image, background-size;
  transition: 1s all ease;
  
  &:hover {
    background-image: url(${({ alternateImgUrl }) => alternateImgUrl});
    background-size: 200%;
    transition: 1s all ease;
  }
`;

export const ProductCard = ({ product, color }) => {
  const { shortDescription, price, brand, images, promotionPercentage, priceWithoutDiscount } = product;
  const { name } = brand;
  const avatar = images[2].url;
  const alternate = images[3].url;
  const priceOptions = (value) => ({ value, style: 'currency', currency: 'BRL' });

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
        {promotionPercentage ?
          <SalesProduct>
            <FullPrice>
              <FormattedNumber {...priceOptions(priceWithoutDiscount)} />
            </FullPrice>
            <FormattedMessage {...messages.discount} values={{ promotionPercentage }} />
            <SalePrice>
              <FormattedNumber {...priceOptions(price)} />
            </SalePrice>
          </SalesProduct> :
          <ProductPrice>
            <FormattedNumber {...priceOptions(price)} tagName="p" />
          </ProductPrice>}
        <ProductPrice>
          <FormattedMessage {...messages.quota} values={{ quota: 12 }} />
          <FormattedNumber {...priceOptions(price / 12)} tagName="p" />
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
