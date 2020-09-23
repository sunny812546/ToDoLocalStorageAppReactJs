import React from "react";

const Todos = ({ todos, removeTodo }) => {
  return (
    <div
      style={{
        width: "400px",

        margin: "auto",
        color: "black",
      }}
    >
      {todos.map((todo) => {
        return (
          <React.Fragment>
            <div
              key={todo.id}
              style={{
                backgroundColor: "#F7F7FF",
                border: "1px solid #131112",
                margin: "10px 0px",
                textAlign: "center",
              }}
            >
              <li
                style={{
                  display: "inline-block",
                  verticalAlign: "middle",
                  textAlign: "center",
                }}
              >
                {todo.todoString}
              </li>
              <span
                style={{
                  position: "absolute",
                  right: "500px",
                  verticalAlign: "middle",
                }}
                onClick={() => {
                  removeTodo(todo.id);
                }}
              >
                ✅
              </span>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Todos;
