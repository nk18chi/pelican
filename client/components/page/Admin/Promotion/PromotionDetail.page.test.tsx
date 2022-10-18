import React from 'react';
import { render, screen } from '@testing-library/react';

import PromotionDetailPage from './PromotionDetail.page';

describe('PromotionDetail.page', () => {
  it('renders the headline', () => {
    render(<PromotionDetailPage test="" />);
    const heading1 = screen.getByText(/Promotion Detail/i);
    expect(heading1).toBeInTheDocument();
  });
});
