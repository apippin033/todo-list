import React from "react";

export const TodoItem = ({ todo, toggleComplete, removeTodo }) => {
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
      <button onClick={() => removeTodo(todo.id)}>delete</button>
    </div>
  );
};
