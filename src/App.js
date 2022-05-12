import "./App.css";
import React from "react";
import { todos } from "./data.js";
import { TodoList } from "./components/todoList.js";

function App() {
  return (
    <div className="App">
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
