import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Starship } from './Starship';

const fetchPlanets = async (greet, page) => {
  console.log(greet);
  const res = await fetch(`http://swapi.dev/api/starships/?page=${page}`);
  return res.json();
};

export const Starships = () => {
  const [page, setPage] = useState(1);
  const greet = 'hello';
  const { data, status } = useQuery(['starships', greet, page], () => fetchPlanets(greet, page), {
    staleTime: 0,
    // cacheTime: 10,
    // onSuccess: () => console.log('data fetched with no problem'),
    // onError: console.log('there was an issue with fetching the data'),
  });

  return (
    <div>
      <h2>Starships</h2>
      <button
        onClick={() => {
          setPage(1);
        }}
      >
        page 1
      </button>
      <button
        onClick={() => {
          setPage(2);
        }}
      >
        page 2
      </button>
      <button
        onClick={() => {
          setPage(3);
        }}
      >
        page 3
      </button>

      {status === 'loading' && <div>Loading data ...</div>}
      {status === 'error' && <div>Error fetching data</div>}
      {status === 'success' && (
        <div>
          {data.results.map(result => (
            <Starship starship={result} key={result.name} />
          ))}
        </div>
      )}
    </div>
  );
};
