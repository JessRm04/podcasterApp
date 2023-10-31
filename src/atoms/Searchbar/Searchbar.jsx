import React from 'react';
import './searchbar.css'

const SearchBar = ({ type, placeholder, value, onChange }) => {
  return (
    <div className="searchbar">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;
