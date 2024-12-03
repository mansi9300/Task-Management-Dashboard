import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { updateTask } from "../redux/tasksSlice";

const EditTask = () => {
  const { taskId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const task = useSelector((state) =>
    state.tasks.tasks.find((task) => task.id === taskId)
  );

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setDueDate(task.dueDate);
      setCompleted(task.completed);
    } else {
      navigate("/tasks"); 
    }
  }, [task, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedTask = {
      id: taskId,
      title,
      description,
      dueDate,
      completed,
    };

    dispatch(updateTask(updatedTask)); 
    navigate("/tasks"); 
  };

  return (
    <div>
      <h2>Edit Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Due Date</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={completed}
              onChange={(e) => setCompleted(e.target.checked)}
            />
            Mark as Completed
          </label>
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditTask;
