import { Outlet } from "react-router-dom";
import { ThemeProvider } from "../control/ThemeProvider";
import authContext from "../context/authContext";
import { useState } from "react";
import siteLoadingContext from "../context/siteLoading";
import { Toaster } from "sonner";

const Root = () => {
  const [auth, setAuth] = useState<any>(null);
  const [siteLoading, setSiteLoading] = useState(true);
  return (
    <authContext.Provider value={{ auth: auth, setAuth: setAuth }}>
      <siteLoadingContext.Provider value={{ siteLoading, setSiteLoading }}>
        <ThemeProvider storageKey="theme">
          <Outlet />
          <Toaster richColors position="top-center" duration={2000} />
        </ThemeProvider>
      </siteLoadingContext.Provider>
    </authContext.Provider>
  );
};

export default Root;
