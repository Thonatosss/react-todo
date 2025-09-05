import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const loadFromStorage = () => {
  try {
    const data = localStorage.getItem("todos");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};
const todoSlice = createSlice({
  name: "todo",
  initialState: loadFromStorage(),
  reducers: {
    createTodo: (state, action) => {
      if (!action.payload) return;
      state.push({
        id: nanoid(),
        todoText: action.payload.trim(),
        isDone: false,
        isFavourite: false,
      });
    },
    handleDelete: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      const { id, todoText } = action.payload;
      return state.map((todo) =>
        todo.id === id ? { ...todo, todoText: todoText } : todo
      );
    },
    setDone: (state, action) => {
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );
    },
    addToFavourites: (state, action) => {
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isFavourite: !todo.isFavourite }
          : todo
      );
    },
    handleCompleted: (state) => {
      return state.filter((todo) => !todo.isDone);
    },
  },
});

export const {
  createTodo,
  handleDelete,
  editTodo,
  setDone,
  addToFavourites,
  handleCompleted,
} = todoSlice.actions;

export default todoSlice.reducer;
