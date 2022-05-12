import "./App.css";
import React from "react";
import { useState } from "react";
import { todos } from "./data.js";
import { TodoList } from "./components/todoList.js";

function App() {
  const [todo, setTodo] = useState(todos);

  const toggleComplete = (id) => {
    const newTodo = [...todo];
    newTodo[id].complete = !newTodo[id].complete;
    setTodo(newTodo);
  };
  return (
    <div className="App">
      <h1>Todo List App</h1>
      <form>
        <input type="text" />
        <button>Add item</button>
      </form>
      <TodoList todos={todos} toggleComplete={toggleComplete} />
    </div>
  );
}

export default App;
