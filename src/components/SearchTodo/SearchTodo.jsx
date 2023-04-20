import React from "react";
import "./SearchTodo.css";
import SVG from "../SVG/SVG";
export default function SearchTodo({ searchedValue, setSearchedValue }) {
  return (
    <div className="search-field">
      <label className="search-input d-flex flex-row jc-start gap-10px">
        <SVG id={"search"} fill="#6f6f6f" />
        <input
          className="flex-grow-1"
          type="text"
          placeholder="search tasks"
          value={searchedValue}
          onChange={(event) => {
            setSearchedValue(event.target.value);
          }}
        />
      </label>
    </div>
  );
}
