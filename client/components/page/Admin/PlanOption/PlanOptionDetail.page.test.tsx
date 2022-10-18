import React from 'react';
import { render, screen } from '@testing-library/react';

import PlanOptionDetailPage from './PlanOptionDetail.page';

describe('PlanOptionDetail.page', () => {
  it('renders the headline', () => {
    render(<PlanOptionDetailPage test="" />);
    const heading1 = screen.getByText(/PlanOption Detail/i);
    expect(heading1).toBeInTheDocument();
  });
});
