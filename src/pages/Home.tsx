import { toast, Toaster } from "sonner";
import useTheme from "../hooks/useTheme";
import type { theme } from "../types/theme";
import toggleTheme from "../utils/toggleTheme";
import SecureLS from "secure-ls";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import lsInstance from "../utils/lsInstance";
import useSiteLoading from "../hooks/useSiteLoading";
import styles from "../styles.module.css";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const { setAuth } = useAuth();
  const { siteLoading } = useSiteLoading();
  const navigate = useNavigate();

  // Delete all this
  const ls = new SecureLS({ encodingType: "aes", isCompression: true });
  const [localStorageValue, setLocalStorageValue] = useState("");

  useEffect(() => {
    setLocalStorageValue(lsInstance.get("auth"));
  }, []);
  // Delete

  if (siteLoading) {
    return <div className={styles.screen}>Loading Home...</div>;
  }

  return (
    <div className={styles.screen}>
      {/* Delete here and start */}
      <h1 className="text-3xl font-bold">Home</h1>
      <div className=" flex items-center justify-center gap-4">
        <button
          className=" bg-success px-6 py-2 rounded-md hover:scale-105"
          onClick={() => {
            const themeValue: theme = theme === "dark" ? "light" : "dark";
            toggleTheme({ themeValue, setTheme });
          }}
        >
          Toggle Theme
        </button>
        <button
          className=" bg-secondary text-foreground px-6 py-2 rounded-md hover:scale-105"
          onClick={() => {
            console.log("show toast");
            toast.info("My first toast");
          }}
        >
          Show toast
        </button>
        <button
          className=" bg-secondary text-foreground px-6 py-2 rounded-md hover:scale-105"
          onClick={() => {
            ls.remove("auth");
            setAuth(null);
            navigate("/login");
          }}
        >
          Logout
        </button>
      </div>
      <p>Current theme: {theme}</p>
      <p>Local storage value: {JSON.stringify(localStorageValue)}</p>
      <Toaster richColors theme={theme} position="top-center" duration={2000} />
      {/* Delete */}
    </div>
  );
}
