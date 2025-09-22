import { useSelector } from "react-redux";

export function TodoHistory() {
  const todos = useSelector((state) => state.todo);
  const deletedTodos = todos.filter((todo) => todo.deletedAt);
  return deletedTodos.length > 0 ? (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <p>{todo.todoText}</p>
          <p>Deleted at {todo.deletedAt}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p>No deleted todos</p>
  );
}
