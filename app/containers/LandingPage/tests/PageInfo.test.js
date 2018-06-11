import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';
import { Breadcrumb, PageTitle, PageDescription } from 'components/TextComponents';
import { PageInfo, PageInfoWrapper, GreySign } from '../PageInfo';
import messages from '../messages';

const render = () => shallow(<PageInfo />);

describe('<PageInfo />', () => {
  it('should render a PageInfo section with all the matching components', () => {
    const topbar = render();
    expect(topbar.containsMatchingElement(
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
    )).toBeTruthy();
  });
});
