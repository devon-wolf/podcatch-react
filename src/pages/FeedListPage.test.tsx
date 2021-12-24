import React from 'react';
import { render } from '@testing-library/react';
import FeedListPage from './FeedListPage';

describe('feed list page', () => {
  it('renders successfully', () => {
    const { baseElement } = render(<FeedListPage />);
    expect(baseElement).toBeTruthy();
  });
});
