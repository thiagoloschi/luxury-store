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
    font-family: inherit;
  }
`;

export const ProductName = ProductText.extend`
  font-size: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 700;
`;

export const ProductDescription = ProductText.extend`
  font-size: 13px;
  font-weight: 100;
  padding: 8px 0;
  font-family: Polaris-Book,sans-serif;
  text-transform: capitalize;
`;

export const ProductPrice = ProductText.extend`
  font-size: 14px;
  font-weight: 100;
  font-family: Polaris-Book,sans-serif;
  padding: 2px 0;
`;

export const SalesProduct = ProductPrice.extend`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  > p, span {
    margin: 0 4px;
  }
`;

export const FullPrice = ProductPrice.extend`
  color: lightgrey; 
  text-decoration: line-through;
`;

export const SalePrice = ProductPrice.extend`
  color: lightcoral; 
`;
