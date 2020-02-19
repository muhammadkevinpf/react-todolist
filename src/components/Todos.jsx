import React from "react";
import Todo from "./Todo";
const Todos = () => {
  const todos = [
    {
      text: "EDAAAN"
    },
    {
      text: "EDAAAN"
    },
    {
      text: "EDAAAN"
    },
    {
      text: "EDAAAN"
    }
  ];
  return (
    <section className="todos">
      {todos.map(todo => (
        <Todo text={todo.text} />
      ))}
    </section>
  );
};

export default Todos;
