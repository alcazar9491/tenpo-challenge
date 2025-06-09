import type { RootState } from "@store/store";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom"


export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {


  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />
  }

  return <>{children}</>
}
