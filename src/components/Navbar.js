import React from 'react';

export const Navbar = ({ setPage }) => {
  return (
    <nav>
      <button className="planets" onClick={() => setPage('planets')}>
        Planets
      </button>
      <button className="people" onClick={() => setPage('people')}>
        People
      </button>
      <button className="starships" onClick={() => setPage('starships')}>
        Starships
      </button>
    </nav>
  );
};
