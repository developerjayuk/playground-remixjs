import { Link, useLoaderData } from "@remix-run/react";
import styles from '../styles/note-details.css';
import { getStoredNotes } from "../data/notes";
import { Note } from "../models/Note";

export default function NoteDetail() {
  const note = useLoaderData<Note>();

  return (
    <main id ="note-details">
      <header>
        <Link to="/notes" className="back-link">Back to Notes</Link>
      </header>
      <h1>{note.title}</h1>
      <p id="note-default-content">{note.content}</p>
    </main>
  );
}

import type { LoaderFunctionArgs } from "@remix-run/node";

export async function loader({ params }: LoaderFunctionArgs) {
  const notes = await getStoredNotes();
  const noteId = params.noteId;
  const note: Note = notes.find((note: Note) => note.id.toString() === noteId);
  
  if (!note) {
    throw new Response("Note not found", { status: 404 });
  }

  return note;
}

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}