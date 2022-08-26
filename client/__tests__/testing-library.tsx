import React from 'react';
import { render, screen } from '@testing-library/react';

import Index from '../pages/index';
import { TProduct } from 'types/product';

const testProduct: TProduct = {
  _id: '1',
  name: 'product name 1',
  user: {
    _id: '1',
    name: 'user 1',
  },
};

describe('App', () => {
  it('renders a heading', () => {
    render(<Index product={testProduct} products={[testProduct]} />);
    const heading = screen.getByText(/Build Your Plan/i);
    expect(heading).toBeInTheDocument();
  });
});
