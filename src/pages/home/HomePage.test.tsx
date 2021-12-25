import React from 'react';
import { render } from '@testing-library/react';
import HomePage from './HomePage';

describe('home page', () => {
  it('renders successfully', () => {
    const { baseElement } = render(<HomePage />);
    expect(baseElement).toBeTruthy();
  });
});
