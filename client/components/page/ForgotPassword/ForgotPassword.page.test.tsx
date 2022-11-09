import React from 'react';
import { render, screen } from '@testing-library/react';

import ForgotPasswordPage from './ForgotPassword.page';

describe('ForgotPassword.page', () => {
  it('renders the headline', () => {
    render(<ForgotPasswordPage test="" />);
    const heading1 = screen.getByText(/Forgot your password\?/i);
    expect(heading1).toBeInTheDocument();
  });
});
