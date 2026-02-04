import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

export default function Navbar() {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    toast.success("Logout successful");
  };

  return (
    <nav className="bg-slate-900 text-white px-6 py-4 flex justify-between">
      <h1 className="font-semibold text-lg">PrimeTrade Dashboard</h1>
      <button
        onClick={handleLogout}
        className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded"
      >
        Logout
      </button>
    </nav>
  );
}
