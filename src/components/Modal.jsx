import React from "react";
import NoteInput from "./note/NoteInput";
import { IoIosClose } from "react-icons/io";

function Modal({ isOpen, addNote, isOpenHandler }) {
  return (
    isOpen && (
      <div className="note-app__body note-input">
        <h2>Buat Catatan</h2>
        <NoteInput addNote={addNote} />

        <button onClick={isOpenHandler}>
          <IoIosClose />
        </button>
      </div>
    )
  );
}

export default Modal;
