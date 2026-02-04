import { useEffect, useState } from "react";
import api from "../api/axios";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const loadTasks = async () => {
    const res = await api.get("/tasks");
    setTasks(res.data);
  };

  const addTask = async () => {
    await api.post("/tasks", { title });
    setTitle("");
    loadTasks();
  };

  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    loadTasks();
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
            className="bg-blue-600 text-white px-4 rounded"
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
            <button onClick={() => deleteTask(t._id)} className="text-red-500">
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
