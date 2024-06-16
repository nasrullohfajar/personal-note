import React, { useState, useEffect } from "react";
import NoteInput from "../components/NoteInput";
import NoteList from "../components/NoteList";

const NoteApp = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const onDeleteHandler = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const onAddNoteHandler = ({ title, body }) => {
    setNotes((prevNotes) => [
      ...prevNotes,
      {
        id: +new Date(),
        title,
        body,
        archived: false,
        createdAt: new Date(),
      },
    ]);
  };

  return (
    <>
      <div className="note-app__header">
        <h1>Personal Notes</h1>
      </div>

      <div className="note-app__body note-input">
        <h2>Buat Catatan</h2>
        <NoteInput addNote={onAddNoteHandler} />
      </div>

      <div className="note-app__body">
        <h2>Catatan</h2>
        <NoteList notes={notes} onDelete={onDeleteHandler} />
      </div>
    </>
  );
};

export default NoteApp;
