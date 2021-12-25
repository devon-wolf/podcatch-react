import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppBar from './AppBar';

describe('app bar', () => {
  it('renders successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <AppBar />
      </BrowserRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
