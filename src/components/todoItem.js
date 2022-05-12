import React from "react";

export const TodoItem = ({ todo, toggleComplete }) => {
  return (
    <div>
      <p>
        {todo.description}
        {todo.complete ? "Complete" : "Not Complete"}
        <input
          type={"checkbox"}
          onChange={() => toggleComplete()}
          name={"complete"}
          id={todo.id}
        />{" "}
      </p>
      <button>Delete item</button>
    </div>
  );
};
