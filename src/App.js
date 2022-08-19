import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { People } from './components/People';
import { Planets } from './components/Planets';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Starships } from './components/Starships';

export const App = () => {
  const [page, setPage] = useState('planets');
  return (
    <>
      <div className="App">
        <h1>Star Wars Info</h1>
        <Navbar setPage={setPage} />
        <div className="content">
          {page === 'planets' ? <Planets /> : page === 'people' ? <People /> : <Starships />}
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
};
