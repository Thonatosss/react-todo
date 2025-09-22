export function ViewButtons({setView}) {
  return (
    <ul>
    <li>
        <button onClick={() => setView("all")}>All</button>
      </li>
      <li>
        <button onClick={() => setView("active")}>Active</button>
      </li>
      <li>
        <button onClick={() => setView("completed")}>Completed</button>
      </li>
      <li>
        <button onClick={() => setView("deleted")}>Deleted</button>
      </li>
    </ul>
  );
}
