import { SearchBar } from "./components/SearchBar";
import { useEffect} from "react";
import { TodoList } from "./components/TodoList";
import { Title } from "./components/Title";
import "./App.css";
import { useSelector } from "react-redux";


function App() {
  const todos = useSelector((state) => state.todo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <div className=" p-3 flex flex-col items-center font-jet-brains rounded-3xl relative z-10 lg:p-30">
      <Title>Pulseboard</Title>
      <SearchBar />
      {todos.length > 0 && <TodoList />} 
    </div>
  );
}

export default App;
