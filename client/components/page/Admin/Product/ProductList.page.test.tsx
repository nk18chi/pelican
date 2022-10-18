import React from 'react';
import { render, screen } from '@testing-library/react';

import ProductListPage from './ProductList.page';

describe('ProductList.page', () => {
  it('renders the headline', () => {
    render(<ProductListPage test="" />);
    const heading1 = screen.getByText(/Product List/i);
    expect(heading1).toBeInTheDocument();
  });
});
