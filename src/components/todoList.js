import React from "react";
import { TodoItem } from "./todoItem.js";

export const TodoList = ({ todos, toggleComplete, removeTodo }) => {
  return todos.map((todo) => {
    return (
      <TodoItem
        key={todo.id}
        todo={todo}
        toggleComplete={toggleComplete}
        removeTodo={removeTodo}
      />
    );
  });
};
