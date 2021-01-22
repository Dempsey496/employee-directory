import React from 'react';
import './SortButton.css';

const SortButton = () => {
  return (
    <div className="btn-group" role="group" aria-label="Basic outlined example">
      <button type="button" class="btn btn-outline-dark">Sort by First Name</button>
      <button type="button" class="btn btn-outline-dark">Sort by Last Name</button>
    </div>
  );
};

export default SortButton;