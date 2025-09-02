import { useState } from "react";
import { TotalTodos } from "./TotalTodos";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FiCircle } from "react-icons/fi";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

function TodoElement({
  todoData,
  deleteTodo,
  markAsDone,
  editTodo,
  addToFavourites,
}) {
  const { id, todoText, isDone, isFavourite } = todoData;
  const [newText, setNewText] = useState("");
  const [isEditing, setEdit] = useState(false);

  function handleSave() {
    if (newText.trim()) {
      editTodo(id, newText);
      setEdit(false);
    }
  }

  return (
    <li
      className={`rounded-md ${
        isDone ? "bg-green-100 text-gray-500" : "bg-transparent text-text-primary"
      } p-2 relative lg:p-4 border-purple-950/60 border w-full`}
    >
      {isEditing ? (
        <div className="flex justify-between gap-1">
          <input
            className={`w-full focus:outline-none pl-5 border-[0.5px] border-gray-200 h-10 rounded-md lg:text-xl`}
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          ></input>
          <div className="flex gap-1 text-white">
            <button
              className="font-jet-brains cursor-pointer bg-button-color w-12 rounded-sm text-sm sm:w-15 lg:w-20 lg:text-base xl:w-22 "
              onClick={() => handleSave()}
            >
              Save
            </button>
            <button
              className="font-jet-brains cursor-pointer bg-button-color w-12 rounded-sm text-sm sm:w-15 lg:w-20 lg:text-base xl:w-22 "
              onClick={() => setEdit(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-between h-10 items-center  lg:pb-3 lg:pt-3">
          <div className="flex gap-5 ">
            <button className="absolute top-1" onClick={() => addToFavourites(id)}>
            
              {isFavourite ? <FaStar className="text-yellow-400 cursor-pointer lg:text-xl" /> : <CiStar className="cursor-pointer lg:text-xl" />}
            </button>
            <button
              className="cursor-pointer sm:text-base ml-5"
              onClick={() => markAsDone(id)}
            >
              {isDone ? (
                <AiOutlineCheckCircle className="text-xl lg:text-3xl text-green-500" />
              ) : (
                <FiCircle className="text-xl lg:text-3xl" />
              )}
            </button>
            <p className={`${isDone && "line-through"} lg:text-xl`}>
              {todoText}
            </p>
          </div>
          <div className="flex gap-1">
            {" "}
            <button
              className="font-jet-brains cursor-pointer bg-button-color h-10 rounded-sm text-white w-12 text-sm sm:w-15 lg:w-20 lg:text-base xl:w-22  "
              onClick={() => deleteTodo(id)}
            >
              Delete
            </button>
            <button
              className="font-jet-brains cursor-pointer bg-button-color h-10 rounded-sm text-white w-12 text-sm sm:w-15 lg:w-20 lg:text-base xl:w-22  "
              onClick={() => {
                setNewText(todoText);
                setEdit(true);
              }}
            >
              Edit
            </button>
          </div>
        </div>
      )}
    </li>
  );
}

export function TodoList({
  todos,
  deleteTodo,
  markAsDone,
  editTodo,
  handleCompleted,
  addToFavourites,
}) {
  const favourites = todos.filter(({ isFavourite }) => isFavourite);
  console.log(favourites);

  return (
    <>
      <ul className="flex flex-col mt-7 w-full gap-5 shadow-xs p-10 xl:w-[60%] lg:gap-8">
        {favourites.map((todo) => (
          <TodoElement
            key={todo.id}
            todoData={todo}
            deleteTodo={deleteTodo}
            markAsDone={markAsDone}
            editTodo={editTodo}
            addToFavourites={addToFavourites}
          />
        ))}
        {todos.map(
          (todo) =>
            !todo.isFavourite && (
              <TodoElement
                key={todo.id}
                todoData={todo}
                deleteTodo={deleteTodo}
                markAsDone={markAsDone}
                editTodo={editTodo}
                addToFavourites={addToFavourites}
              />
            )
        )}
      </ul>
      <TotalTodos handleCompleted={handleCompleted} totalTodos={todos.length} />
    </>
  );
}
