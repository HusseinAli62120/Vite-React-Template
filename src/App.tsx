import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./components/Root";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Login from "./pages/Login";
import RequireAuth from "./control/RequireAuth";
import Unauthorized from "./pages/Unauthorized";
import SignUp from "./pages/Signup";
import AdminPage from "./pages/Admin";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        {/* Pages that require auth */}
        <Route element={<RequireAuth allowedUsers={["ADMIN", "USER"]} />}>
          <Route index element={<Home />} />
        </Route>

        <Route
          element={<RequireAuth allowedUsers={["ADMIN", "SUPER_ADMIN"]} />}
        >
          <Route path="/admin" element={<AdminPage />} />
        </Route>

        {/* Public pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Error />} />
        <Route path="unauthorized" element={<Unauthorized />} />
      </Route>,
    ),
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
