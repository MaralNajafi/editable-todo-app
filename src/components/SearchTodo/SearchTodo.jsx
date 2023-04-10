import React from 'react'

export default function SearchTodo({searchedValue, setSearchedValue}) {
  return (
    <input
      type="text"
      placeholder="search tasks"
      value={searchedValue}
      onChange={(event) => {
        setSearchedValue(event.target.value);
      }}
    />
  );
}
