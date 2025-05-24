import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Demo() {
  return (
    <>
      <h1>Demo page</h1>
      
    </>
  );
}
