import React from "react";
import { useState } from "react";
import { v4 as uuid4 } from "uuid";

export const TodoForm = ({ addTodo }) => {
  const [todos, setTodos] = useState("");

  const handleInput = (e) => {
    setTodos(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todos) return;
    addTodo({ ...todos, id: uuid4() });
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
