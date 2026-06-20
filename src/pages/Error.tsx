import { Link } from "react-router-dom";
import styles from "../styles.module.css";

export default function NotFound() {
  return (
    <div className={`${styles.screen}`}>
      <div className="text-center space-y-6 max-w-md px-4">
        {/* Messaging */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Page not found
          </h1>
          <p className="text-base text-muted-foreground">
            Sorry, we couldn’t find the page you’re looking for. It might have
            been moved or deleted.
          </p>
        </div>

        {/* Action Button */}
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-md bg-foreground px-4 py-2.5 text-sm font-medium text-background shadow 
          transition-all hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
