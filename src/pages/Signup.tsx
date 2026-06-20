import { Link, Navigate } from "react-router-dom";
import styles from "../styles.module.css";
import { authClient } from "../utils/auth";
import { toast } from "sonner";
import { useState } from "react";
import { validationRegex } from "../utils/values";

export default function Signup() {
  // Hooks
  const { data: session } = authClient.useSession();

  // States
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Functions
  const handleSignup = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password.length < 8) {
      toast.error("Password must be at least 8 characters long");
      return;
    }

    // Check if username is valid
    if (!validationRegex.test(username)) {
      toast.error(
        "Username can only contain letters, numbers, underscores, and hyphens",
      );
      return;
    }

    try {
      setLoading(true);
      const dummyEmail = `dummyEmail-${username}-${Date.now()}@domain.com`;
      const { error } = await authClient.signUp.email({
        email: dummyEmail, // required
        name: name, // required
        password: password, // required
        username: username,
      });

      // Throw error
      if (error) {
        throw error;
      }

      // Reset the values
      setName("");
      setUsername("");
      setPassword("");
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (session?.user?.username) {
    return <Navigate to="/" />;
  }

  return (
    <div className={styles.screen}>
      <form
        className=" flex flex-col items-center justify-center px-4 py-10 rounded gap-4 border border-border"
        onSubmit={handleSignup}
      >
        <h4 className="text-foreground text-2xl mb-3">Signup</h4>
        <input
          className="bg-secondary px-2 py-1 border border-border rounded-md"
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="bg-secondary px-2 py-1 border border-border rounded-md"
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="bg-secondary px-2 py-1 border border-border rounded-md"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          disabled={loading}
          className="w-full py-2 rounded-md hover:bg-secondary transition duration-300 ease-in-out hover:scale-105 border border-border disabled:opacity-50 disabled:cursor-not-allowed"
          type="submit"
        >
          {loading ? "Signing up..." : "Signup"}
        </button>

        <span className="text-foreground text-sm">
          Already have an account?{" "}
          <Link className="text-foreground hover:underline" to="/login">
            Login
          </Link>
        </span>
      </form>
    </div>
  );
}
