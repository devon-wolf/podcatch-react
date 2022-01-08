import React from 'react';
import { NavLink } from 'react-router-dom';
import MiniPlayer from '../mini-player/MiniPlayer';

const AppBar = (): JSX.Element => {
  const testPlayerProps = {
    audioUrl: `https://c10.patreonusercontent.com/3/eyJhIjoxLCJwIjoxfQ%3D%3D/patreon-media/p/post/25211653/00d470f4273a40efafb4b13bb3f3bb71/1.mp3?token-time=1640995200&token-hash=6CQ0N929CC6vC-L3ekDh21cYWNn5EY5zfSfsTVOhq5c%3D`,
    audioTitle: 'RQG 35 - The Exposition Box',
  };

  return (
    <header>
      <h1>podcatch</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/feeds">Feeds</NavLink>
        <NavLink to="/library">Library</NavLink>
        <NavLink to="/queue">Queue</NavLink>
      </nav>
      <MiniPlayer {...testPlayerProps} />
    </header>
  );
};

export default AppBar;
