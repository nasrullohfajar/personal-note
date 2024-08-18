import React from "react";
import NoteInput from "./NoteInput";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete }) {
  return notes.length > 0 ? (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-12 mx-24 lg:mx-0">
      {notes.map((note) => (
        <NoteItem key={note.id} id={note.id} onDelete={onDelete} {...note} />
      ))}
    </div>
  ) : (
    <div className="text-center text-green-900">Tidak ada catatan</div>
  );
}

export default NoteList;
