import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 20%;
  text-align: center;
`;

export const ProductName = styled(FormattedMessage)`
  font-size: 18px;
`;

export const ProductDescription = styled(FormattedMessage)`
  font-size: 12px;
`;

export const ProductPrice = styled(FormattedMessage)`
  font-size: 16px;
`;
