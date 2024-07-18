import { UserAuth } from "../context/AuthContext";
import { logout } from "../functions/auth";

export default function UserDashboard() {
  const { user } = UserAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <div>Welcome {user?.firstName}</div>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline block mt-12"
        onClick={handleLogout}
      >
        Logout
      </button>
    </>
  );
}