import { Link } from "react-router-dom";
import styles from "../styles.module.css";

export default function Unauthorized() {
  return (
    <div className={styles.screen}>
      <h1 className="text-3xl font-bold">
        You are not authorized to access this page, go back{" "}
        <Link className=" underline text-sky-600 " to={"/"}>
          Home
        </Link>
      </h1>
    </div>
  );
}
