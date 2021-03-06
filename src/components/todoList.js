import React from "react";
import { TodoItem } from "./todoItem.js";

export const TodoList = ({ todos }) => {
  return todos.map((todo) => {
    return <TodoItem key={todo.id} todo={todo} />;
  });
};
