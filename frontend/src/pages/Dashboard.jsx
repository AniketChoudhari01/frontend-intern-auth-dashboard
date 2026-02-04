import { useEffect, useState } from "react";
import api from "../api/axios";
import Navbar from "../components/Navbar";
import { toast } from "react-toastify";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const loadTasks = async () => {
    try {
      const res = await api.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      toast.error("Failed to load tasks");
    }
  };

  const addTask = async () => {
    if (!title.trim()) {
      toast.info("Please enter a task title");
      return;
    }

    try {
      await api.post("/tasks", { title });
      toast.success("Task added successfully");
      setTitle("");
      loadTasks();
    } catch (err) {
      toast.error("Failed to add task");
    }
  };

  const deleteTask = async (id) => {
    try {
      await api.delete(`/tasks/${id}`);
      toast.success("Task deleted");
      loadTasks();
    } catch (err) {
      toast.error("Failed to delete task");
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <>
      <Navbar />
      <div className="p-6 space-y-4">
        <h2 className="text-xl font-semibold">My Tasks</h2>

        <div className="flex gap-2">
          <input
            className="border p-2 flex-1"
            placeholder="New task"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button
            onClick={addTask}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 rounded"
          >
            Add
          </button>
        </div>

        {tasks.map((t) => (
          <div
            key={t._id}
            className="border p-2 flex justify-between items-center"
          >
            <span>{t.title}</span>
            <button
              onClick={() => deleteTask(t._id)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
