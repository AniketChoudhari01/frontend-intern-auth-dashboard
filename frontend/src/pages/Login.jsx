import { useContext, useState } from "react";
import api from "../api/axios";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  const { login } = useContext(AuthContext);
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const submit = async () => {
    try {
      const res = await api.post("/auth/login", form);
      login(res.data.token);
      toast.success("Login successful");
    } catch (err) {
      const msg = err.response?.data?.message || "Login failed";
      setError(msg);
      toast.error(msg);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white p-6 rounded shadow w-80 space-y-3">
        <h2 className="text-xl font-semibold">Login</h2>

        {error && <p className="text-red-500 text-sm">{error}</p>}

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
          className="bg-blue-600 hover:bg-blue-700 text-white w-full py-2 rounded"
        >
          Login
        </button>

        <p className="text-sm">
          New user?{" "}
          <Link to="/register" className="text-blue-600">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
