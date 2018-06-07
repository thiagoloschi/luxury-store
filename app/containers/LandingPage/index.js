import React from 'react';
import FarfetchLogo from 'assets/images/farfetch.svg';
import TopBar from 'components/TopBar';
import ProductCard from 'components/ProductCard';
import messages from './messages';

export default class LandingPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <TopBar logo={FarfetchLogo} />
        <ProductCard
          avatar={'https://cdn-images.farfetch-contents.com/12/70/83/73/12708373_12532723_255.jpg'}
          name={messages.name}
          description={messages.description}
          price={messages.price}
        />
      </div>
    );
  }
}
