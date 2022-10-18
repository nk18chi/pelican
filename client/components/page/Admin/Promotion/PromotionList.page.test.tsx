import React from 'react';
import { render, screen } from '@testing-library/react';

import PromotionListPage from './PromotionList.page';

describe('PromotionList.page', () => {
  it('renders the headline', () => {
    render(<PromotionListPage test="" />);
    const heading1 = screen.getByText(/Promotion List/i);
    expect(heading1).toBeInTheDocument();
  });
});
