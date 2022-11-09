import React from 'react';
import { render, screen } from '@testing-library/react';

import DashboardPage from './Dashboard.page';

describe('User Profile Page', () => {
  it('renders the headline', () => {
    render(<DashboardPage test="" />);
    const heading1 = screen.getByText(/Sales Overview/i);
    expect(heading1).toBeInTheDocument();
  });
});
