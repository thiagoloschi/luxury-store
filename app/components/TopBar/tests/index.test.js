import React from 'react';
import { shallow } from 'enzyme';
import Colors from 'assets/colors';
import FarfecthLogo from 'assets/images/farfetch.svg';
import { TopBar, DefaulTopBar } from '../TopBar';

const defaultProps = {
  logo: FarfecthLogo,
};

const render = (props) => shallow(<TopBar {...props} {...defaultProps} />);

describe('<TopBar />', () => {
  it('should render a DefaulTopBar', () => {
    const topbar = render();
    expect(topbar.find(DefaulTopBar).exists()).toBeTruthy();
  });

  describe('when no color was supplied', () => {
    const defaultColored = render();
    it('should render a white TopBar', () => {
      expect(defaultColored.find(DefaulTopBar).props().color).toEqual(Colors.white);
    });
  });
  describe('when there is a supplied color', () => {
    const blackTopBar = render({ color: 'black' });
    it('should render a the supplied color', () => {
      expect(blackTopBar.find(DefaulTopBar).props().color).toEqual('black');
    });
  });
});
