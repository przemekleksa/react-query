import React from 'react';
import './Cards.css';

export const Starship = ({ starship }) => {
  return (
    <div className="card">
      <h3>{starship.name}</h3>
      <p>Model - {starship.model}</p>
    </div>
  );
};
