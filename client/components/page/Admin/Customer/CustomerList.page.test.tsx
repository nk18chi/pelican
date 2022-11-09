import React from 'react';
import { render, screen } from '@testing-library/react';

import CustomerListPage from './CustomerList.page';

describe('CustomerList.page', () => {
  it('renders the headline', () => {
    render(<CustomerListPage test="" />);
    const heading1 = screen.getByText(/Customer List/i);
    expect(heading1).toBeInTheDocument();
  });
});
