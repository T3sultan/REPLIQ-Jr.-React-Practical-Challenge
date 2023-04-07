import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import analytics from "../firebase.init";
import Loading from "../components/Loading";
import useAdmin from "./useAdmin";

const RequireAdmin = ({ children }) => {
  const [user, loading] = useAuthState(analytics);
  const [admin, adminLoading] = useAdmin(user);

  const location = useLocation();

  if (loading || adminLoading) {
    return <Loading />;
  }
  if (!user || !admin) {
    signOut(analytics);
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default RequireAdmin;
