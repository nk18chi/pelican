import React from 'react';
import { render, screen } from '@testing-library/react';

import InvoiceDetailPage from './InvoiceDetail.page';

describe('InvoiceDetail.page', () => {
  it('renders the headline', () => {
    render(<InvoiceDetailPage test="" />);
    const heading1 = screen.getByText(/Invoice Detail/i);
    expect(heading1).toBeInTheDocument();
  });
});
