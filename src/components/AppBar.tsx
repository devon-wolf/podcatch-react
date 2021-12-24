import React from 'react';
import { NavLink } from 'react-router-dom';

const AppBar = (): JSX.Element => {
  return (
    <header>
      <h1>podcatch</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/feeds">Feeds</NavLink>
        <NavLink to="/library">Library</NavLink>
        <NavLink to="/queue">Queue</NavLink>
      </nav>
    </header>
  );
};

export default AppBar;
