import { useDispatch, useSelector } from "react-redux";
import { handleCompleted } from "../features/todoSlice";

export function TotalTodos() {
  const dispatch = useDispatch();
  const totalTodos = useSelector((state) => state.todo.length);

  return <div className="text-text-primary font-russo-one tracking-wider flex justify-between w-[85%] mt-10 text-xs sm:text-sm lg:w-[70%] ">
    <p>{totalTodos} things NEED to be done!</p>
    <button className="cursor-pointer hover:underline" onClick={() => dispatch(handleCompleted())}>Clear completed</button>
  </div>;
}
