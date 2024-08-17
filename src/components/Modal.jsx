import React from "react";
import NoteInput from "./note/NoteInput";
import { IoIosClose } from "react-icons/io";

function Modal({ isOpen, addNote, isOpenHandler }) {
  return (
    isOpen && (
      <div className=" p-12 absolute inset-x-0 mt-20 items-center justify-center bg-black rounded-xl m-auto max-w-[500px]">
        <button className="w-full " onClick={isOpenHandler}>
          <IoIosClose className="ml-auto" size={24} />
        </button>
        <h2 className="my-4">Buat Catatan</h2>
        <NoteInput addNote={addNote} />
      </div>
    )
  );
}

export default Modal;
