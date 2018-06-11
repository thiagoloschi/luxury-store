import React from 'react';
import { shallow } from 'enzyme';
import Colors from 'assets/colors';
import {
  DescriptionWrapper,
  ProductName,
  ProductDescription,
  ProductPrice,
} from 'components/TextComponents';
import {
    ProductCard,
    DefaultCardWrapper,
    AvatarWrapper,
    Avatar,
} from '../ProductCard';

const mockedMsg = {
  id: 'product id',
  defaultMessage: 'this is a very nice product',
};

const defaultProps = {
  avatar: 'some img url goes here',
  name: mockedMsg,
  description: mockedMsg,
  price: mockedMsg,
};

const render = (props) => shallow(<ProductCard {...props} {...defaultProps} />);
const { avatar, name, description, price } = defaultProps;

describe('<ProductCard />', () => {
  it('should render Product card with the correct props', () => {
    const productCard = render();
    expect(productCard.containsMatchingElement(
      <DefaultCardWrapper>
        <AvatarWrapper>
          <Avatar src={avatar} />
        </AvatarWrapper>
        <DescriptionWrapper>
          <ProductName {...name} />
          <ProductDescription {...description} />
          <ProductPrice {...price} />
        </DescriptionWrapper>
      </DefaultCardWrapper>
    )).toBeTruthy();
  });

  describe('when no color was supplied', () => {
    const defaultColored = render();
    it('should render a white DefaultCardWrapper', () => {
      expect(defaultColored.find(DefaultCardWrapper).props().color).toEqual(Colors.white);
    });
  });

  describe('when there is a supplied color', () => {
    const productCard = render({ color: 'black' });
    it('should render a DefaultCardWrapper with the supplied color', () => {
      expect(productCard.find(DefaultCardWrapper).props().color).toEqual('black');
    });
  });
});
