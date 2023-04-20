import React, { useRef } from "react";
import "./Todo.css";
import SVG from "../SVG/SVG";

export default function Todo({
  content,
  dateCreated,
  dateModified,
  handleDelete,
  handleEdit,
  handleCheck,
  isChecked,
  isDeleted,
}) {
  const editableInput = useRef();

  function handleBlur(event) {
    if (event.target.innerText === "" || !event.target.innerText) {
      handleDelete();
    }
  }

  function handleFocus() {
    editableInput.current.focus();
  }
  return (
    <li className={`todo ${isDeleted ? "deleted" : ""}`}>
      <div className="todo-field d-flex flex-row ai-center ">
        <button onClick={handleCheck}>
          <SVG id={"check"} fill={isChecked ? "blue" : "transparent"} />
        </button>

        <span
          contenteditable={isChecked ? false : ""}
          ref={editableInput}
          className={`flex-grow-1 todo-input ${isChecked ? "checked" : ""}`}
          onBlur={handleBlur}
          onChange={handleEdit}
        >
          {content}
        </span>
        <span className="input-underline"></span>
        <div className="buttons d-flex flex-row gap-10px">
          <button
            className="edit-btn"
            onClick={handleFocus}
            disabled={isChecked}
          >
            <SVG id={"edit"} />
          </button>
          <button className="delete-btn" onClick={handleDelete}>
            <SVG id={"trashcan"} />
          </button>
        </div>
      </div>
      <div className="todo-date">
        <div>date created: {dateCreated}</div>
        {dateModified && <div>Date modified: {dateModified}</div>}
      </div>
    </li>
  );
}
