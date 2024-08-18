import React, { useState, useEffect } from "react";
import NoteList from "../components/note/NoteList";
import CreateButton from "../components/button/CreateButton";
import Modal from "../components/Modal";

const NoteApp = () => {
  const [notes, setNotes] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
    setIsOpen(false);
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

  const isOpenHandler = () => {
    setIsOpen(!isOpen);
  };

  console.log(isOpen);

  return (
    <>
      <div className="flex items-center justify-between px-8 py-3 bg-green-100 text-white-100 border-b-1 shadow-md">
        <h1 className="text-xl">Personal Note</h1>
        <CreateButton onClick={isOpenHandler} />
      </div>

      <Modal
        isOpen={isOpen}
        addNote={onAddNoteHandler}
        isOpenHandler={isOpenHandler}
      />

      <div className="max-w-[1000px] my-4 mx-auto p-3">
        <h2 className="text-lg mb-4 mx-24 lg:mx-0">Catatan</h2>
        <NoteList notes={notes} onDelete={onDeleteHandler} />
      </div>
    </>
  );
};

export default NoteApp;
