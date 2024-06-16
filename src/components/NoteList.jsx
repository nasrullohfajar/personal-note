import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete }) {
  return notes.length > 0 ? (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem key={note.id} id={note.id} onDelete={onDelete} {...note} />
      ))}
    </div>
  ) : (
    <div className="notes-list__empty-message">Tidak ada catatan</div>
  );
}

export default NoteList;
