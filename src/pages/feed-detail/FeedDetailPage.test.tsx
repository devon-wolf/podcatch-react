import React from 'react';
import { render } from '@testing-library/react';
import FeedDetailPage from './FeedDetailPage';

describe('feed detail page', () => {
  it('renders successfully', () => {
    const { baseElement } = render(<FeedDetailPage />);
    expect(baseElement).toBeTruthy();
  });
});
