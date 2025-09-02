import { useState } from "react";

export function SearchBar({ createTodo }) {
  const [todoText, setTodoText] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();
    createTodo(todoText);
  }
  return (
    <header className="w-full lg:mb-5">
      <form
        className="flex content-center justify-center"
        onSubmit={handleSubmit}
      >
        <input
          className=" w-full border-purple-950 border shadow-[0px_0px_38px_15px_rgba(70,34,109,1)] bg-pink-500/6 text-white h-13 rounded-l-md pl-5 focus:outline-none text-sm sm:w-[75%] sm:pl-5 sm:text-base lg:w-[80%] lg:h-15 lg:text-xl xl:w-[70%]"
          placeholder="What needs to be done?"
          name="input"
          onChange={(e) => setTodoText(e.target.value)}
        ></input>
        <button className="bg-accent-purple/50 rounded-r-md  text-white w-15 shadow-md text-2xl text-center cursor-pointer">
          <span>+</span>
        </button>
      </form>
    </header>
  );
}
