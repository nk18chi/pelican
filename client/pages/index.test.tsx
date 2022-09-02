import React from 'react';
import { render, screen } from '@testing-library/react';

import Index from './index';

describe('App', () => {
  it('renders a headline', () => {
    render(<Index products={[]} taxes={[]} plans={[]} planOptions={[]} />);
    const heading1 = screen.getByText(/Looking for a new plan?/i);
    expect(heading1).toBeInTheDocument();
    const heading2 = screen.getByText(/Build Your Plan/i);
    expect(heading2).toBeInTheDocument();
  });
});
