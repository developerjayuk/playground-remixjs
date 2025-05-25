import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import homeStyles from "~/styles/home.css";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export function links() {
  return [{rel: "stylesheet", href: homeStyles}]
}

export default function Index() {
  return (
    <main id="content">
      <h1>Note Taking App</h1>
      <p>Never forget anything again and keep track of all your notes.</p>
      <p id="cta">
        <Link to="/notes">Try Now!</Link>
      </p>
    </main>
  );
}
