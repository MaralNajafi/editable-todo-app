import React, { useState } from "react";

export default function Todo({
  content,
  handleDelete,
  handleEdit,
  handleCheck,
  isChecked,
}) {
  const [isReadonly, setIsReadonly] = useState(true);
  function handleBlur(event) {
    if (event.target.value === "" || !event.target.value) {
      handleDelete();
    }
  }
  return (
    <li>
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
      <button onClick={handleCheck}>{isChecked ? "uncheck" : "check"}</button>
    </li>
  );
}
