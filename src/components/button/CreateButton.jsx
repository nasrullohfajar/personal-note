import React from "react";
import { MdCreateNewFolder } from "react-icons/md";

function CreateButton({ onClick }) {
  return (
    <button
      className=" flex flex-row items-center justify-center gap-x-2"
      onClick={onClick}
    >
      <MdCreateNewFolder size={17} /> Tambah
    </button>
  );
}

export default CreateButton;
