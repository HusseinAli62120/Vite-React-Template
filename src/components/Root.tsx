import { Outlet } from "react-router-dom";
import { ThemeProvider } from "../control/ThemeProvider";
import { Toaster } from "sonner";

const Root = () => {
  return (
    <ThemeProvider storageKey="theme">
      <Outlet />
      <Toaster richColors position="top-center" duration={2000} />
    </ThemeProvider>
  );
};

export default Root;
