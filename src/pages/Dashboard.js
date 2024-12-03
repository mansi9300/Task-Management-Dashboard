import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8 space-y-6">
        
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
            Welcome to Task Manager
          </h1>
          <p className="text-gray-600 text-lg">
            Manage your tasks with ease and efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        
          <Link
            to="/create-task"
            className="group block bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-105 p-6"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-white bg-opacity-20 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-8 h-8 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold">Create Task</h2>
                <p className="text-sm text-gray-100">
                  Add a new task to your list.
                </p>
              </div>
            </div>
          </Link>

        
          <Link
            to="/tasks"
            className="group block bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600 text-white rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-105 p-6"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-white bg-opacity-20 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-8 h-8 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 7h18M3 12h18M3 17h18"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold">View All Tasks</h2>
                <p className="text-sm text-gray-100">
                  See the tasks you’ve created.
                </p>
              </div>
            </div>
          </Link>
        </div>

      
        <div className="text-center">
          <p className="text-gray-500">
            Empower your productivity with{" "}
            <span className="text-blue-600 font-semibold">
              Task Management System
            </span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
