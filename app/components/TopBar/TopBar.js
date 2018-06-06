import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Dimens from 'assets/dimensions';
import Colors from 'assets/colors';

export const DefaulTopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${Dimens.topBarHeight}
  color: ${({ color }) => color};
`;

export const TopBar = ({ logo, color }) => (
  <DefaulTopBar color={color}>
    {logo}
  </DefaulTopBar>
);

TopBar.propTypes = {
  logo: PropTypes.string.isRequired,
  color: PropTypes.string,
};

TopBar.defaultProps = {
  color: Colors.white,
};

export default TopBar;
