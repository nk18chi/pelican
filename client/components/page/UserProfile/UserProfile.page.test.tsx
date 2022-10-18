import React from 'react';
import { render, screen } from '@testing-library/react';

import UserProfilePage from './UserProfile.page';

describe('UserProfile.page', () => {
  it('renders the headline', () => {
    render(<UserProfilePage test="" />);
    const heading1 = screen.getByText(/User Profile/i);
    expect(heading1).toBeInTheDocument();
  });
});
