import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";

const App = () => {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    const localStorageTodo = localStorage.getItem("todos");
    console.log("First use effects called", todo);
    if (localStorageTodo) {
      setTodo(JSON.parse(localStorageTodo));
    }
    console.log("First second time use effects called", todo);
  }, []);

  useEffect(() => {
    console.log("Second use effects called", todo);
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);
  const addTodo = async (todoList) => {
    console.log("addTodo called", todo);

    setTodo([...todo, todoList]);
  };
  const removeTodo = (id) => {
    console.log("removeTodo called", localStorage, todo);

    setTodo(todo.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      {console.log("return called")}
      <TodoForm addTodo={addTodo} />
      <Todos todos={todo} removeTodo={removeTodo} />
    </div>
  );
};

export default App;
