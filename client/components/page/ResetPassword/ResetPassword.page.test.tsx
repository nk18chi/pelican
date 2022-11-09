import React from 'react';
import { render, screen } from '@testing-library/react';

import ResetPasswordPage from './ResetPassword.page';

describe('ResetPassword.page', () => {
  it('renders the headline', () => {
    render(<ResetPasswordPage test="" />);
    const heading1 = screen.getByText(/Enter new password/i);
    expect(heading1).toBeInTheDocument();
  });
});
