import React from 'react';
import { render, screen } from '@testing-library/react';

import InvoiceListPage from './InvoiceList.page';

describe('InvoiceList.page', () => {
  it('renders the headline', () => {
    render(<InvoiceListPage test="" />);
    const heading1 = screen.getByText(/Invoice List/i);
    expect(heading1).toBeInTheDocument();
  });
});
