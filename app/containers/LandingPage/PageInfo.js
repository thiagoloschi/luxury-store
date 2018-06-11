import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import breadcrumbSign from 'assets/images/breadCrumb.svg';
import { Breadcrumb, PageTitle, PageDescription } from 'components/TextComponents';
import messages from './messages';

export const PageInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 14%;
  margin-bottom: 16px;
  width: 100%;
  background-color: #eee;

  @media (max-width: 720px) {
    padding: 16px 10%;
  }
`;

export const GreySign = styled.img.attrs({
  src: breadcrumbSign,
})`
  height: 4px;
  padding: 0 2px;
  brackground-color: grey;
  transform: rotate(-90deg); 
`;

export const PageInfo = () => (
  <PageInfoWrapper>
    <Breadcrumb>
      <p>Início <GreySign /> Mulher <GreySign /> Roupas <GreySign /> Saias</p>
    </Breadcrumb>
    <PageTitle>
      <FormattedMessage {...messages.pageTitle} tagName="p" />
    </PageTitle>
    <PageDescription>
      <FormattedMessage {...messages.pageDescription} tagName="p" />
    </PageDescription>
  </PageInfoWrapper>
);

export default PageInfo;
