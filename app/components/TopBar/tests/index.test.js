import React from 'react';
import { shallow } from 'enzyme';
import Colors from 'assets/colors';
import FarfecthLogo from 'assets/images/farfetch.svg';
import { TopBar, DefaultTopBar, Logo } from '../TopBar';

const defaultProps = {
  logo: FarfecthLogo,
};

const render = (props) => shallow(<TopBar {...props} {...defaultProps} />);

describe('<TopBar />', () => {
  it('should render a DefaultTopBar with the proper logo', () => {
    const topbar = render();
    expect(topbar.containsMatchingElement(
      <DefaultTopBar>
        <Logo src={defaultProps.logo} />
      </DefaultTopBar>
    )).toBeTruthy();
  });

  describe('when no color was supplied', () => {
    const defaultColored = render();
    it('should render a white TopBar', () => {
      expect(defaultColored.find(DefaultTopBar).props().color).toEqual(Colors.white);
    });
  });

  describe('when there is a supplied color', () => {
    const blackTopBar = render({ color: 'black' });
    it('should render a TopBar with the supplied color', () => {
      expect(blackTopBar.find(DefaultTopBar).props().color).toEqual('black');
    });
  });
});
