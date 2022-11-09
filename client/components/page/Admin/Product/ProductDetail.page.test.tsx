import React from 'react';
import { render, screen } from '@testing-library/react';

import ProductDetailPage from './ProductDetail.page';

describe('ProductDetail.page', () => {
  it('renders the headline', () => {
    render(<ProductDetailPage test="" />);
    const heading1 = screen.getByText(/Product Detail/i);
    expect(heading1).toBeInTheDocument();
  });
});
