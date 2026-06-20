import { Navigate, useNavigate } from "react-router-dom";
import lsInstance from "../utils/lsInstance";
import useAuth from "../hooks/useAuth";
import styles from "../styles.module.css";

export default function Login() {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();

  // Functions
  const handleLogin = () => {
    // Data we get from the backend
    const auth = {
      id: "1",
      userName: "test",
      email: "[EMAIL_ADDRESS]",
      role: "USER",
      accessToken: "test",
    };
    // Set to local storage
    lsInstance.set("auth", auth);
    setAuth(auth);

    // Navigate home
    navigate("/");
  };

  if (auth?.accessToken) {
    return <Navigate to="/" />;
  }

  return (
    <div className={styles.screen}>
      <button
        className=" bg-secondary text-foreground px-6 py-2 rounded-md hover:scale-105"
        onClick={handleLogin}
      >
        Login
      </button>{" "}
    </div>
  );
}
