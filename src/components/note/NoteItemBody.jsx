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
    <div className="p-3 flex-1">
      <h3 className="text-ellipsis overflow-hidden whitespace-nowrap mb-2">
        {title}
      </h3>
      <p className="text-xs mb-2 text-white-200">{formattedDateString}</p>
      <p className="text-sm">{body}</p>
    </div>
  );
}

export default NoteItemBody;
