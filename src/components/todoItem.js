import React from "react";

export const TodoItem = ({ todo }) => {
  return (
    <div>
      <p>
        {todo.description}
        {todo.complete ? "Complete" : "Not Complete"}
        <input type="checkbox" checked={todo.complete} />
      </p>
      <button>Delete item</button>
    </div>
  );
};
