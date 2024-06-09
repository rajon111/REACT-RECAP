import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {


  const [todos, setTodos] = useState([
    "Go to the Gym",
    "Ear more fresh fruits and vegetables",
    "Play some football",
  ]);

  function hadndleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
  }

  return (
    <>
      <TodoInput hadndleAddTodos={hadndleAddTodos} />
      <TodoList todos={todos} />
    </>
  );
}

export default App;
