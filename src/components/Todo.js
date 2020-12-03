import React from "react";

export default function Todo({ items }) {
  return (
    <div>
      {items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </div>
  );
}
