import React from "react";

export const TodoItem = ({ todo }) => {
  return (
    <>
      {todo.description}
      {todo.complete ? "Complete" : "Not Complete"}
    </>
  );
};
