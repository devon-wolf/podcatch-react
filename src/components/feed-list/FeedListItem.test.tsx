import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FeedListItem from './FeedListItem';

describe('FeedListItem', () => {
  const defaultProps = {
    title: 'Test Title',
  };

  it('renders successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <FeedListItem {...defaultProps} />
      </BrowserRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
