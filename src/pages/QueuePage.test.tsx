import React from 'react';
import { render } from '@testing-library/react';
import QueuePage from './QueuePage';

describe('queue page', () => {
  it('renders successfully', () => {
    const { baseElement } = render(<QueuePage />);
    expect(baseElement).toBeTruthy();
  });
});
