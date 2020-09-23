import React, { useState } from "react";
import { v4 } from "uuid";

const TodoForm = ({ addTodo }) => {
  const [todoString, setTodoString] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if (todoString === "") {
      return alert("Fill your wishes with some string");
    }
    const todo = {
      todoString,
      id: v4(),
    };
    addTodo(todo);
    setTodoString("");
  };
  return (
    <form style={{ margin: "10px 0px" }}>
      <input
        style={{
          verticalAlign: "middle",
          display: "inline-block",
        }}
        type="text"
        id="todo"
        name="todo"
        value={todoString}
        placeholder="Add a TODO"
        onChange={(e) => setTodoString(e.target.value)}
      ></input>
      <button
        style={{
          backgroundColor: "#16c60c",
          display: "inline-block",
          border: "none",
          outline: "none",
          padding: "4px",
          fontSize: "12px",
          cursor: "pointer",
          verticalAlign: "middle",
          color: "white",
        }}
        onClick={submitHandler}
      >
        ADD
      </button>
    </form>
  );
};

export default TodoForm;
