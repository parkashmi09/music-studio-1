import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
let user=true

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
} 