import React, { useState } from 'react';

const FoodSearch = (props) => {
  const { onSearch } = props;

  const [search, setSearch] = useState('');

  const handleSearch = (event) => {
    setSearch(event.target.value);
    onSearch(event.target.value.toLowerCase());
  };

  return (
    <div>
      <input
        type="text"
        className="input search-bar"
        name="search"
        placeholder="Search"
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
};

export default FoodSearch;
