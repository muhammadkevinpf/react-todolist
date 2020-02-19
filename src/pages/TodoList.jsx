import React, { useState } from "react";
import Paper from "../components/Paper";
import Header from "../components/Header";
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos";
export default function TodoList() {
  const [todos, setTodos] = useState([
    {
      text: "Belajar React"
    },
    {
      text: "belajar state"
    }
  ]);

  return (
    <Paper>
      <Header />
      <TodoForm />
      <Todos todos={todos} />
    </Paper>
  );
}
