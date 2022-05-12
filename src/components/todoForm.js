import React from "react";
import { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [todos, setTodos] = useState("");

  const handleInput = (e) => {
    setTodos(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todos) return;
    addTodo(todos);
    setTodos("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a task"
          value={todos}
          onChange={handleInput}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
