import { render, screen } from '@testing-library/react';
import SignUpPage from './SignUp.page';
import { ThemeWrapper } from 'test/util';

describe('SignUp.page', () => {
  it('renders the headline', () => {
    render(<SignUpPage test="" />, { wrapper: ThemeWrapper });
    const heading1 = screen.getByText(/Sign Up/i);
    expect(heading1).toBeInTheDocument();
  });
});
