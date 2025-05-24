import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Notes() {
  return (
    <main>
      <h1>Notes</h1>
      
    </main>
  );
}
