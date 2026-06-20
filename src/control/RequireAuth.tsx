import { useContext } from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";
import authContext from "../context/authContext";
import lsInstance from "../utils/lsInstance";
import type { Role } from "../types/Role";

export default function RequireAuth({
  allowedUsers,
}: {
  allowedUsers: Role[];
}) {
  const { auth } = useContext(authContext);
  const location = useLocation();
  // Use this so as to not momentarily flash the login page.
  const storedAuth = lsInstance.get("auth");

  // We pass the allowed roles in allowedUsers, if the current user has one of these roles, then he/she is in.
  return auth && allowedUsers?.includes(auth?.role as Role) ? (
    <Outlet />
  ) : auth ? (
    <Navigate to={"/unauthorized"} state={{ from: location }} replace />
  ) : (
    !storedAuth &&
    !auth && <Navigate to={"/login"} state={{ from: location }} replace />
  );
}
