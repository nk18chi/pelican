import React from 'react';
import { render, screen } from '@testing-library/react';

import PlanListPage from './PlanList.page';

describe('PlanList.page', () => {
  it('renders the headline', () => {
    render(<PlanListPage test="" />);
    const heading1 = screen.getByText(/Plan List/i);
    expect(heading1).toBeInTheDocument();
  });
});
