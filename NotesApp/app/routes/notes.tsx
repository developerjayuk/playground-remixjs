import type { MetaFunction } from "@remix-run/node";
import type { ActionFunctionArgs } from "@remix-run/node";
import NewNote from "~/components/NewNote";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

// any code in here will run on the server
export async function action({ request }: ActionFunctionArgs) {
  request.formData();
}

export default function Notes() {
  return (
    <main>
      <NewNote />
    </main>
  );
}