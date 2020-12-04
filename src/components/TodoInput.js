import React from "react";

export default function TodoInput({ id, handleChange, value }) {
  return (
    <>
      <input autoFocus id={id} onChange={handleChange} value={value} />
    </>
  );
}
