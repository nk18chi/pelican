import React from 'react';
import { render, screen } from '@testing-library/react';

import SignInPage from './SignIn.page';

describe('SignIn.page', () => {
  it('renders the headline', () => {
    render(<SignInPage test="" />);
    const heading1 = screen.getByText(/Sign in to your account/i);
    expect(heading1).toBeInTheDocument();
  });
});
