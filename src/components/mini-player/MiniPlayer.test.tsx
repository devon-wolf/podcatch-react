import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MiniPlayer from './MiniPlayer';

describe('mini-player', () => {
  const defaultProps = {
    audioUrl:
      'https://sphinx.acast.com/themagnusarchives/mag-goodbyefornow/media.mp3',
    audioTitle: 'MAG - Goodbye for Now',
  };

  it('renders successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <MiniPlayer {...defaultProps} />
      </BrowserRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
