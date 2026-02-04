import { useState } from "react";
import api from "../api/axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const submit = async () => {
    try {
      await api.post("/auth/register", form);
      toast.success("Registration successful");
      navigate("/");
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white p-6 rounded shadow w-80 space-y-3">
        <h2 className="text-xl font-semibold">Register</h2>

        <input
          className="border p-2 w-full"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          className="border p-2 w-full"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          className="border p-2 w-full"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button
          onClick={submit}
          className="bg-green-600 hover:bg-green-700 text-white w-full py-2 rounded"
        >
          Register
        </button>

        <Link to="/" className="text-sm text-blue-600">
          Back to login
        </Link>
      </div>
    </div>
  );
}
