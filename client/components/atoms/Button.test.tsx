import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('App', () => {
  it('renders a heading', () => {
    const { getByText } = render(<Button label={'submit'} />);
    expect(getByText('submit'));
  });
});
