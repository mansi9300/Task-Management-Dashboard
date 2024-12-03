import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CreateTask from "./pages/CreateTask";
import TaskList from "./pages/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleEditTask = (task) => {
    setTaskToEdit(task);
  };

  const handleUpdateTask = (updatedTask) => {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
    setTaskToEdit(null);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/create-task"
          element={
            <CreateTask
              onAddTask={handleAddTask}
              onUpdateTask={handleUpdateTask}
              taskToEdit={taskToEdit}
            />
          }
        />
        <Route
          path="/tasks"
          element={
            <TaskList
              tasks={tasks}
              onDeleteTask={handleDeleteTask}
              onEditTask={handleEditTask}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
