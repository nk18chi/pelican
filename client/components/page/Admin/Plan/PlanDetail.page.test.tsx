import React from 'react';
import { render, screen } from '@testing-library/react';

import PlanDetailPage from './PlanDetail.page';

describe('PlanDetail.page', () => {
  it('renders the headline', () => {
    render(<PlanDetailPage test="" />);
    const heading1 = screen.getByText(/Plan Detail/i);
    expect(heading1).toBeInTheDocument();
  });
});
