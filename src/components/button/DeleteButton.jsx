import React from "react";

function DeleteButton({ id, onDelete }) {
  return (
    <button
      className="w-full p-2 bg-green-100 hover:bg-green-200 text-white "
      onClick={() => onDelete(id)}
    >
      Delete
    </button>
  );
}

export default DeleteButton;
