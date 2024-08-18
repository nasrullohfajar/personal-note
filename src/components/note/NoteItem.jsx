import React from "react";
import NoteItemBody from "./NoteItemBody";
import DeleteButton from "../button/DeleteButton";

function NoteItem({ title, body, createdAt, id, onDelete }) {
  return (
    <div className="flex flex-col bg-white border rounded-lg overflow-hidden shadow-md">
      <NoteItemBody title={title} body={body} createdAt={createdAt} />
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
}

export default NoteItem;
