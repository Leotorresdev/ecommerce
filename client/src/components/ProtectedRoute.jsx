import { Navigate } from "react-router-dom";
import useUserStore from "../store/userStore";

function ProtectedRoute({ children }) {
  const token = useUserStore((state) => state.token);
  return token ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
