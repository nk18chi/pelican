import React from 'react';
import { render, screen } from '@testing-library/react';

import CustomerDetailPage from './CustomerDetail.page';

describe('CustomerDetail.page', () => {
  it('renders the headline', () => {
    render(<CustomerDetailPage test="" />);
    const heading1 = screen.getByText(/Customer Detail/i);
    expect(heading1).toBeInTheDocument();
  });
});
