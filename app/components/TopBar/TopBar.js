import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Dimens from 'assets/dimensions';
import Colors from 'assets/colors';

export const DefaultTopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${Dimens.topBarHeight};
  background-color: ${({ color }) => color};
`;

export const Logo = styled.img`
  width: 150px;
  height: auto;
`;

export const TopBar = ({ logo, color }) => (
  <DefaultTopBar color={color}>
    <Logo src={logo} />
  </DefaultTopBar>
);

TopBar.propTypes = {
  logo: PropTypes.string.isRequired,
  color: PropTypes.string,
};

TopBar.defaultProps = {
  color: Colors.white,
};

export default TopBar;
