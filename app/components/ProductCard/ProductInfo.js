import styled from 'styled-components';

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 8px;
  text-align: center;
`;

export const ProductText = styled.div`
  font-family: Polaris-Condensed-Bold,Polaris-Bold,sans-serif;
  width: 100%;
  > p {
    margin: 0;
    padding: 8px;
    font-family: inherit;
  }
`;

export const ProductName = ProductText.extend`
  font-size: 16px;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 700;
`;

export const ProductDescription = ProductText.extend`
  font-size: 16px;
  font-weight: 100;
  font-family: Polaris-Book,sans-serif;
  text-transform: capitalize;
`;

export const ProductPrice = ProductText.extend`
  font-size: 16px;
  font-weight: 100;
  font-family: Polaris-Book,sans-serif;
`;
