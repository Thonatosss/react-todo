import { nanoid } from "nanoid";
import { SearchBar } from "./components/SearchBar";
import { useCallback, useEffect, useState } from "react";
import { TodoList } from "./components/TodoList";
import { Title } from "./components/Title";
import "./App.css";

function App() {
  const [todoList, setTodo] = useState(() => {
    try {
      const data = localStorage.getItem("todos");
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  });
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  const createTodo = useCallback((text) => {
    if (!text) return;
    setTodo((prev) => {
      const normalizedText = text.trim();

      if (prev.some(({ todoText }) => todoText === normalizedText)) return prev;

      return [
        ...prev,
        {
          id: nanoid(),
          todoText: text.trim(),
          isDone: false,
          isFavourite: false,
        },
      ];
    });
  }, []);

  const handleDelete = useCallback(
    (todoId) => setTodo((prev) => prev.filter(({ id }) => id !== todoId)),
    []
  );

  const setDone = useCallback((todoId) => {
    setTodo((prev) =>
      prev.map((todo) =>
        todo.id === todoId
          ? {
              ...todo,
              isDone: !todo.isDone,
            }
          : todo
      )
    );
  }, []);

  const editTodo = useCallback((todoID, text) => {
    setTodo((prev) =>
      prev.map((todo) =>
        todo.id === todoID ? { ...todo, todoText: text.trim() } : todo
      )
    );
  }, []);

  const addToFavourites = useCallback(
    (id) =>
      setTodo((prev) =>
        prev.map((todo) =>
          todo.id === id ? { ...todo, isFavourite: !todo.isFavourite } : todo
        )
      ),
    []
  );
  const handleCompleted = useCallback(
    () => setTodo((prev) => prev.filter(({ isDone }) => isDone !== true)),
    []
  );
  return (
    <div className=" p-3 flex flex-col items-center font-jet-brains rounded-3xl relative z-10 lg:p-30">
      <Title>Todo App</Title>
      <SearchBar createTodo={createTodo} />
      {todoList.length > 0 && (
        <TodoList
          todos={todoList}
          deleteTodo={handleDelete}
          markAsDone={setDone}
          editTodo={editTodo}
          handleCompleted={handleCompleted}
          addToFavourites={addToFavourites}
        />
      )}
    </div>
  );
}

export default App;
