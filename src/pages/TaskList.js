
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTask, markAsCompleted, setFilter } from "../redux/tasksSlice";

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const filter = useSelector((state) => state.tasks.filter);

  useEffect(() => {
    dispatch(setFilter('all')); 
  }, [dispatch]);

 
  const filteredTasks = tasks.filter((task) => {
    switch (filter) {
      case 'completed':
        return task.completed === true;
      case 'pending':
        return task.completed === false;
      case 'overdue':
        return new Date(task.dueDate) < new Date() && !task.completed;
      default:
        return true; 
    }
  });

  const handleDelete = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this task?");
    if (confirmed) {
      dispatch(deleteTask(id));
      alert("Task deleted successfully!");
    }
  };

  const handleMarkCompleted = (id) => {
    dispatch(markAsCompleted(id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800">Your Tasks</h2>
        
      
        <div className="flex justify-center space-x-4 mb-6">
          <button onClick={() => dispatch(setFilter('all'))} className="px-4 py-2 bg-blue-500 text-white rounded-md">
            All Tasks
          </button>
          <button onClick={() => dispatch(setFilter('completed'))} className="px-4 py-2 bg-green-500 text-white rounded-md">
            Completed Tasks
          </button>
          <button onClick={() => dispatch(setFilter('pending'))} className="px-4 py-2 bg-yellow-500 text-white rounded-md">
            Pending Tasks
          </button>
          <button onClick={() => dispatch(setFilter('overdue'))} className="px-4 py-2 bg-red-500 text-white rounded-md">
            Overdue Tasks
          </button>
        </div>

        {filteredTasks.length > 0 ? (
          <ul className="space-y-4">
            {filteredTasks.map((task) => (
              <li
                key={task.id}
                className={`border border-gray-200 rounded-lg p-6 shadow-md ${task.completed ? 'bg-green-200' : 'bg-gray-200'}`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold">{task.title}</h3>
                    <p>{task.description}</p>
                    <p className="text-sm text-gray-500">Due Date: {task.dueDate}</p>
                  </div>
                  <div className="space-x-2">
                    <button
                      onClick={() => handleMarkCompleted(task.id)}
                      className="px-4 py-2 bg-blue-500 rounded-md text-white"
                    >
                      {task.completed ? "Completed" : "Mark as Completed"}
                    </button>
                    
                    <button
                      onClick={() => handleDelete(task.id)}
                      className="px-4 py-2 bg-red-500 rounded-md text-white"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No tasks available. Start creating!</p>
        )}
      </div>
    </div>
  );
};

export default TaskList;

