import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'todos',

  initialState: {
    items: [
      { id: '1', text: 'Practice more' },
      { id: '2', text: 'Get all tasks done on time' },
    ],
    isEdit: false,
    currentTodo: null,
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    editTodo: (state, action) => {
      const { id, text } = action.payload;
      state.items = state.items.map(item =>
        item.id === id ? { ...item, text } : item,
      );
    },
    setIsEdit: (state, action) => {
      state.isEdit = action.payload;
    },

    setCurrentTodo: (state, action) => {
      state.currentTodo = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, editTodo, setIsEdit, setCurrentTodo } =
  slice.actions;
export default slice.reducer;
