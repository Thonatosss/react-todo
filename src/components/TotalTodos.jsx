export function TotalTodos({totalTodos,  handleCompleted}) {
  return <div className="text-text-primary flex justify-between w-[85%] mt-10 text-xs sm:text-sm lg:w-[70%]">
    <p>{totalTodos} things NEED to be done!</p>
    <button className="cursor-pointer" onClick={() => handleCompleted()}>Clear completed</button>
  </div>;
}
