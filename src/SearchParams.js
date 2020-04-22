import React, { useState } from 'react';

const SearchParams = () => {
  const [location, setLocation] = useState('Seattle, WA');

  return (
    <div className="search-params">
      <h2>{location}</h2>
      <form action="">
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location..."
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
