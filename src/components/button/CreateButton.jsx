import React from "react";
import { FaPlus } from "react-icons/fa";

function CreateButton({ onClick }) {
  return (
    <button
      className=" flex flex-row items-center justify-center border rounded-lg p-2 m-5 ml-auto "
      onClick={onClick}
    >
      <FaPlus /> Tambah Catatan
    </button>
  );
}

export default CreateButton;