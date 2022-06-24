import React from 'react';
import { render } from '@testing-library/react';
import Index from '../pages/index';

describe('App', () => {
  it('renders a heading', () => {
    const { getByRole } = render(<Index />);

    const heading = getByRole('heading', {
      name: /money/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
