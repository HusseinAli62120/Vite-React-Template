import styles from "../styles.module.css";

import { Link } from "react-router-dom";

export default function AdminPage() {
  return (
    <div className={styles.screen}>
      <p>Only an Admin or Super admin can access this page 🔐</p>
      <p>
        Go back{" "}
        <Link className="hover:underline" to={"/"}>
          Home 🏠
        </Link>
      </p>
    </div>
  );
}
