import React, { useState } from "react";

export default function Todo({ content, handleDelete, handleEdit }) {
  const [isReadonly, setIsReadonly] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  function handleBlur(event) {
    if (event.target.value === "" || !event.target.value) {
      handleDelete();
    }
  }
  return (
    <div>
      <input
        type="text"
        value={content}
        readOnly={isReadonly}
        disabled={isChecked && true}
        className={isChecked ? "checked" : ""}
        onClick={() => {
          setIsReadonly(false);
        }}
              onBlur={handleBlur}
              onChange={handleEdit}
      />
      <button onClick={handleDelete}>delete</button>
      <button
        onClick={() => {
          setIsChecked(!isChecked);
        }}
      >
        {isChecked ? "uncheck" : "check"}
      </button>
    </div>
  );
}
