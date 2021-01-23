import React from 'react';
import './SortButton.css';

function handleSortClick() { 
  
 } 

const SortButton = () => {
  return (
    // <div className="btn-group" role="group" aria-label="Basic outlined example">
    //   <button type="button" className="btn btn-outline-dark">Sort by First Name</button>
    //   <button type="button" className="btn btn-outline-dark">Sort by Last Name</button>
    // </div>
    <button onClick={handleSortClick} type="button" className="btn btn-outline-dark">Sort by First Name</button>
  );
};

export default SortButton;