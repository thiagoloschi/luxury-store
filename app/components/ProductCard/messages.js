import { defineMessages } from 'react-intl';

export default defineMessages({
  name: {
    id: 'app.components.ProductCard.name',
    defaultMessage: '{name}',
  },
  description: {
    id: 'app.components.ProductCard.description',
    defaultMessage: '{shortDescription}',
  },
  quota: {
    id: 'app.components.ProductCard.price',
    defaultMessage: '{quota} x  ',
  },
  discount: {
    id: 'app.components.ProductCard.promotionPercentage',
    defaultMessage: ' |  {promotionPercentage}% off ',
  },
});
