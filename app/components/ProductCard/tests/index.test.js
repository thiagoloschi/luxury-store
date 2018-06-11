import React from 'react';
import { shallow } from 'enzyme';
import Colors from 'assets/colors';
import { mockedProduct } from 'utils/mockedProduct';
import { FormattedMessage, FormattedNumber } from 'react-intl';
import {
  DescriptionWrapper,
  ProductName,
  ProductDescription,
  ProductPrice,
  SalesProduct,
  FullPrice,
  SalePrice,
} from 'components/TextComponents';
import messages from '../messages';
import {
  ProductCard,
  DefaultCardWrapper,
  Avatar,
} from '../ProductCard';

const defaultProps = {
  product: mockedProduct,
};

const render = (props) => shallow(<ProductCard {...props} />);
const { shortDescription, price, brand, images, priceWithoutDiscount } = defaultProps.product;
const avatar = images[2].url;
const alternate = images[3].url;
const priceOptions = (value) => ({ value, style: 'currency', currency: 'BRL' });

describe('<ProductCard />', () => {
  describe('when there is no sale', () => {
    it('should render a Product card with the correct props', () => {
      const productCard = render(defaultProps);
      expect(productCard.containsMatchingElement(
        <DefaultCardWrapper>
          <Avatar alternateImgUrl={alternate} avatarUrl={avatar}></Avatar>
          <DescriptionWrapper>
            <ProductName>
              <FormattedMessage {...messages.name} values={{ name: brand.name }} tagName="p" />
            </ProductName>
            <ProductDescription>
              <FormattedMessage {...messages.description} values={{ shortDescription }} tagName="p" />
            </ProductDescription>
            <ProductPrice>
              <FormattedNumber {...priceOptions(price)} tagName="p" />
            </ProductPrice>
            <ProductPrice>
              <FormattedMessage {...messages.quota} values={{ quota: 12 }} />
              <FormattedNumber {...priceOptions(price / 12)} tagName="p" />
            </ProductPrice>
          </DescriptionWrapper>
        </DefaultCardWrapper>
      )).toBeTruthy();

      it('should find no SalesProduct', () => {
        expect(productCard.find(SalesProduct).exists()).toBeFalsy();
      });
    });

    describe('when there is a sale', () => {
      it('should render a Product card with the correct props', () => {
        const productOnSale = mockedProduct;
        productOnSale.promotionPercentage = 20;
        const productCard = render({ product: productOnSale });
        expect(productCard.containsMatchingElement(
          <SalesProduct>
            <FullPrice>
              <FormattedNumber {...priceOptions(priceWithoutDiscount)} />
            </FullPrice>
            <FormattedMessage {...messages.discount} values={{ promotionPercentage: 20 }} />
            <SalePrice>
              <FormattedNumber {...priceOptions(price)} />
            </SalePrice>
          </SalesProduct>
        )).toBeTruthy();
      });
    });

    describe('when no color was supplied', () => {
      const defaultColored = render(defaultProps);
      it('should render a white DefaultCardWrapper', () => {
        expect(defaultColored.find(DefaultCardWrapper).props().color).toEqual(Colors.white);
      });
    });

    describe('when there is a supplied color', () => {
      const productCard = render({ ...defaultProps, color: 'black' });
      it('should render a DefaultCardWrapper with the supplied color', () => {
        expect(productCard.find(DefaultCardWrapper).props().color).toEqual('black');
      });
    });
  });
});
