import React from "react";
import Card from "@mui/material/Card";

export const TodoItem = ({ todo, toggleComplete, removeTodo }) => {
  return (
    <div>
      <Card>
        {todo.description}
        {todo.complete ? "Complete" : "Not Complete"}
        <button onClick={() => removeTodo(todo.id)}>delete</button>
        <input
          type={"checkbox"}
          onChange={() => toggleComplete()}
          name={"complete"}
          id={todo.id}
        />{" "}
      </Card>
    </div>
  );
};
