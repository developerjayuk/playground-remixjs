import { redirect, type MetaFunction, type ActionFunctionArgs } from "@remix-run/node";
import NewNote from "../components/NewNote";
import NoteList from "../components/NoteList";
import { getStoredNotes, storeNotes } from "../data/notes";
import { useLoaderData } from "@remix-run/react";
import { Note } from "../models/Note";


export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

// any code in here will run on the server
// post requests will run this code
export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData(); 
  const noteData = Object.fromEntries(formData);

  // add validation
  if (typeof noteData.title !== "string" || noteData.title.trim().length < 5) {
    const validationError = "Title must be at least 5 characters long.";
    return { message: validationError };
  }

  const existingNotes = await getStoredNotes();
  noteData.id = Date.now(); // use current timestamp as ID
  const updatedNotes = existingNotes.concat(noteData);
  await storeNotes(updatedNotes)

  return redirect("/notes");
}

// get requests will run this code
export async function loader() {
  const notes: Note[] = await getStoredNotes();
  return notes;
}

export default function Notes() {
  const notes = useLoaderData<Note[]>();


  return (
    <main>
      <NewNote />
      <NoteList notes={notes} />
    </main>
  );
}