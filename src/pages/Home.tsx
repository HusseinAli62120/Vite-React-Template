import { toast } from "sonner";
import useTheme from "../hooks/useTheme";
import type { theme } from "../types/theme";
import toggleTheme from "../utils/toggleTheme";
import { useNavigate } from "react-router-dom";
import styles from "../styles.module.css";
import { authClient } from "../utils/auth";
import { useState } from "react";

export default function Home() {
  // Hooks
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();
  const { data: session, isPending } = authClient.useSession();

  // States
  const [logoutLoading, setLogoutLoading] = useState(false);

  // Functions
  const handleLogout = async () => {
    setLogoutLoading(true);
    try {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            navigate("/login");
          },
        },
      });
    } catch (error) {
      console.log(error);
      toast.error("Failed to logout");
    } finally {
      setLogoutLoading(false);
    }
  };

  if (isPending) {
    // Skeleton
    return (
      <div className={styles.screen}>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className={styles.screen}>
      <p className="mb-3">
        Hello <span className="font-semibold">{session?.user?.name} 👋</span>{" "}
        Welcome to this template.
      </p>
      <div className=" flex items-center justify-center gap-4">
        <button onClick={() => navigate("/admin")}>
          <div className=" bg-secondary text-foreground px-6 py-2 rounded-md hover:scale-105">
            Admin
          </div>
        </button>
        <button
          className=" bg-secondary text-foreground px-6 py-2 rounded-md hover:scale-105"
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
            toast.info("My first toast");
          }}
        >
          Show toast
        </button>
        <button
          className=" bg-error text-white px-6 py-2 rounded-md hover:scale-105"
          onClick={handleLogout}
        >
          {logoutLoading ? "Logging out..." : "Logout"}
        </button>
      </div>
    </div>
  );
}
