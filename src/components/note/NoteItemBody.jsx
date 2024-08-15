import React from "react";

function NoteItemBody({ title, body, createdAt }) {
  const formattedDate = new Date(createdAt);

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const formattedDateString = formattedDate.toLocaleDateString(
    "id-ID",
    options
  );
  console.log(createdAt);

  return (
    <div className="note-item__content">
      <h3 className="note-item__title">{title}</h3>
      <p className="note-item__date">{formattedDateString}</p>
      <p className="note-item__body">{body}</p>
    </div>
  );
}

export default NoteItemBody;
