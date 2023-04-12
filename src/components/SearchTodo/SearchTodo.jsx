import React from 'react'
import "./SearchTodo.css"
export default function SearchTodo({searchedValue, setSearchedValue}) {
  return (
    <input
      className='search-input'
      type="text"
      placeholder="search tasks"
      value={searchedValue}
      onChange={(event) => {
        setSearchedValue(event.target.value);
      }}
    />
  );
}
