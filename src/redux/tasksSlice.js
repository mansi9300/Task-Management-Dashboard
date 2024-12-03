import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [], 
  filter: "All", 
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload); 
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload); 
    },
    updateTask: (state, action) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = action.payload; 
      }
    },
    markAsCompleted: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = true;
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    }
  },
});

export const { addTask, deleteTask, updateTask, markAsCompleted, setFilter } = tasksSlice.actions;

export default tasksSlice.reducer;
