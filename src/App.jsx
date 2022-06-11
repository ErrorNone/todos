import React, { useEffect, useState } from "react";
import TodoList from "./Todo/TodoList";
import Context from "./context";
import AddTodo from "./Todo/AddTodo";
import Loader from "./Todo/Loader";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((response) => response.json())
      .then((todos) => {
        setTodos(todos);
        setLoading(false);
      });
  }, []);

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.complited = !todo.complited;
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function addTodo(title, id) {
    setTodos(
      todos.concat([
        {
          title,
          id,
          complited: false,
        },
      ])
    );
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <Container className="my-4">
        <h1 className="mb-3 text-center text-primary">todos</h1>
        <AddTodo onCreate={addTodo} />
        {loading && <Loader />}
        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) : loading ? null : (
          <p>All todo complited</p>
        )}
      </Container>
    </Context.Provider>
  );
}

export default App;
