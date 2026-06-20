import { Outlet, useLocation, Navigate } from "react-router-dom";
import { authClient } from "../utils/auth";
import type { Role } from "../types/Role";

export default function RequireAuth({
  allowedUsers,
}: {
  allowedUsers: Role[];
}) {
  const location = useLocation();
  const { data: session, isPending } = authClient.useSession();

  // We pass the allowed roles in allowedUsers, if the current user has one of these roles, then he/she is in.
  return session?.user &&
    allowedUsers?.includes(session?.user?.role as Role) ? (
    <Outlet />
  ) : // If not, but the user is still logged in, then they are unauthorized
  session?.user?.username ? (
    <Navigate to={"/unauthorized"} state={{ from: location }} replace />
  ) : (
    !isPending && <Navigate to={"/login"} state={{ from: location }} replace />
  );
}
