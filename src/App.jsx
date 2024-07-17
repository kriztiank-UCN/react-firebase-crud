import { UserAuth } from "./context/AuthContext";
import NonUserRoutes from "./routes/NonUserRoutes";
import UserRoutes from "./routes/UserRoutes";

function App() {
  // call the UserAuth context
  const { isLoggedOut } = UserAuth();

  return <div>{isLoggedOut ? <NonUserRoutes /> : <UserRoutes />}</div>;
}

export default App;