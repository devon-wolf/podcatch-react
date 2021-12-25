import React from 'react';
import { render } from '@testing-library/react';
import LibraryPage from './LibraryPage';

describe('library page', () => {
  it('renders successfully', () => {
    const { baseElement } = render(<LibraryPage />);
    expect(baseElement).toBeTruthy();
  });
});
