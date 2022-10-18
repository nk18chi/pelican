import React from 'react';
import { render, screen } from '@testing-library/react';

import PlanOptionListPage from './PlanOptionList.page';

describe('PlanOptionList.page', () => {
  it('renders the headline', () => {
    render(<PlanOptionListPage test="" />);
    const heading1 = screen.getByText(/PlanOption List/i);
    expect(heading1).toBeInTheDocument();
  });
});
