import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./components/Root";
import Home from "./pages/Home";
import Error from "./pages/Error";
import PersistLogin from "./control/PersistLogin";
import Login from "./pages/Login";
import RequireAuth from "./control/RequireAuth";
import Unauthorized from "./pages/Unauthorized";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route element={<PersistLogin />}>
          {/* Pages that require auth */}
          <Route element={<RequireAuth allowedUsers={["ADMIN", "USER"]} />}>
            <Route index element={<Home />} />
          </Route>

          {/* Public pages */}
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
          <Route path="unauthorized" element={<Unauthorized />} />
        </Route>
      </Route>,
    ),
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
