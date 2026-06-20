import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import useAuth from "../hooks/useAuth";
import lsInstance from "../utils/lsInstance";
import useRefreshToken from "../hooks/useRefresh";
import useSiteLoading from "../hooks/useSiteLoading";

const PersistLogin = () => {
  const { setAuth } = useAuth();
  const { setSiteLoading } = useSiteLoading();
  const refresh = useRefreshToken();

  useEffect(() => {
    // Start loading
    setSiteLoading(true);

    const verifyPersistence = async () => {
      let storedAuth;
      let refreshAuth;
      try {
        storedAuth = lsInstance.get("auth");

        // Try to get info from local storage, if not available, try using cookie, if not available, redirect to login.
        if (storedAuth) {
          setAuth(storedAuth);
          // console.log("ls");
        } else {
          refreshAuth = await refresh();
          if (refreshAuth) {
            // console.log("refresh");
            setAuth(refreshAuth);
            lsInstance.set("auth", refreshAuth);
          }
        }
      } catch (err) {
        console.error("Persistence error:", err);
      } finally {
        // For testing skeletons
        // setTimeout(() => {
        //   setSiteLoading(false);
        // }, 2000);
      }

      setSiteLoading(false);
    };

    verifyPersistence();
  }, []);

  // Return outlet, and each component will handle its own loading state
  return <Outlet />;
};

export default PersistLogin;
