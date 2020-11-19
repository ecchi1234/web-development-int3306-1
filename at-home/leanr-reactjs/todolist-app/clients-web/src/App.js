import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

const LOCAL_STORAGE_KEY = "todoApp.todos";

function App() {
  const [todos, setTodos] = useState([]);
  const todoListNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function handleAddTodo() {
    const name = todoListNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }];
    });
    console.log(name);
    todoListNameRef.current.value = null;
  }

  function handleClearTodo() {
    const newTodos = todos.filter(todo => !todo.complete);
    setTodos(newTodos);
  }

  return (
    <>
      <TodoList todoList={todos} toggleTodo={toggleTodo} />
      <input ref={todoListNameRef} type="text" />
      <button onClick={handleAddTodo}>add</button>
      <button onClick={handleClearTodo}>clear</button>
      <div>{todos.filter((todo) => !todo.complete).length} left to do</div>
    </>
  );
}

export default App;
