import "./App.css";
import React from "react";
import { useState } from "react";
import { todos } from "./data.js";
import { TodoList } from "./components/todoList.js";
import { TodoForm } from "./components/todoForm.js";

function App() {
  const [todo, setTodo] = useState(todos);

  const toggleComplete = (id) => {
    const newTodo = [...todo];
    newTodo[id].complete = !newTodo[id].complete;
    setTodo(newTodo);
  };

  const removeTodo = (id) => {
    setTodo((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
  };

  const addTodo = (e) => {
    setTodo([...todo, { description: todo }]);
  };
  return (
    <div className="App">
      <h1>Todo List App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        removeTodo={removeTodo}
      ></TodoList>
    </div>
  );
}

export default App;
