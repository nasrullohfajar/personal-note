import React from "react";
import NoteInput from "./note/NoteInput";
import { IoIosClose } from "react-icons/io";

function Modal({ isOpen, addNote, isOpenHandler }) {
  return (
    isOpen && (
      <>
        <div className="absolute top-0 left-0 bg-black opacity-40 w-full h-screen"></div>
        <div className="p-8 absolute inset-x-0 mt-20 items-center justify-center bg-white shadow-md rounded-xl max-w-[500px] mx-12 lg:mx-auto">
          <button
            className="w-full hover:text-green-200"
            onClick={isOpenHandler}
          >
            <IoIosClose className="ml-auto" size={32} />
          </button>
          <NoteInput addNote={addNote} />
        </div>
      </>
    )
  );
}

export default Modal;
