import React from 'react';
import './Cards.css';

export const Person = ({ person }) => {
  return (
    <div className="card">
      <h3>{person.name}</h3>
      <p>Gender - {person.gender}</p>
      <p>BD - {person.birth_year}</p>
      <p>Eyes - {person.eye_color}</p>
    </div>
  );
};
