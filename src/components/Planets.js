import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Planet } from './Planet';

const fetchPlanets = async (greet, page) => {
  console.log(greet);
  const res = await fetch(`http://swapi.dev/api/planets/?page=${page}`);
  return res.json();
};

export const Planets = () => {
  const [page, setPage] = useState(1);
  const greet = 'hello';
  const { data, status, isPreviousData } = useQuery(
    ['planets', greet, page],
    () => fetchPlanets(greet, page),
    {
      staleTime: 0,
      keepPreviousData: true,
      // cacheTime: 10,
      // onSuccess: () => console.log('data fetched with no problem'),
      // onError: console.log('there was an issue with fetching the data'),
    }
  );

  return (
    <div>
      <h2>Planets</h2>

      {status === 'loading' && <div>Loading data ...</div>}
      {status === 'error' && <div>Error fetching data</div>}
      {status === 'success' && (
        <>
          {data.previous && (
            <button
              onClick={() => {
                page > 1 && setPage(page - 1);
              }}
              disabled={page === 1}
            >
              Previous Page
            </button>
          )}
          <button>{page}</button>
          {console.log(isPreviousData)}
          {data.next && (
            <button
              onClick={() => {
                setPage(page + 1);
              }}
            >
              Next Page
            </button>
          )}
          <div>
            {data.results.map(result => (
              <Planet planet={result} key={result.name} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
