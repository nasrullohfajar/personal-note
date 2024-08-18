import React, { useState, useCallback } from "react";

const NoteInput = ({ addNote }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [titleError, setTitleError] = useState("");
  const [bodyError, setBodyError] = useState("");

  const onTitleChangeEventHandler = useCallback((event) => {
    const newTitle = event.target.value;

    if (newTitle.length <= 50) {
      setTitle(newTitle);
      setTitleError("");
    } else {
      setTitleError("Judul catatan tidak boleh lebih dari 50 karakter");
    }
  }, []);

  const onBodyChangeEventHandler = useCallback((event) => {
    const newBody = event.target.value;

    if (newBody.trim() === "") {
      setBodyError("Isi catatan tidak boleh kosong");
    } else {
      setBody(newBody);
      setBodyError("");
    }
  }, []);

  const onSubmitEventHandler = useCallback(
    (event) => {
      event.preventDefault();
      if (title.trim() === "") {
        setTitleError("Judul catatan tidak boleh kosong");
        return;
      }

      if (body.trim() === "") {
        setBodyError("Isi catatan tidak boleh kosong");
        return;
      }

      addNote({
        title,
        body,
      });

      setTitle("");
      setBody("");
      setTitleError("");
      setBodyError("");
    },
    [addNote, title, body]
  );

  return (
    <form className="mx-auto max-w-[500px]" onSubmit={onSubmitEventHandler}>
      <div className="form-group">
        <label htmlFor="title">Judul Catatan</label>
        <input
          type="text"
          id="title"
          placeholder="Tuliskan judul catatan.."
          value={title}
          onChange={onTitleChangeEventHandler}
          className="w-full p-3 my-3 border rounded-lg focus:outline-none"
        />
        {titleError && (
          <span className="text-sm text-red-100">{titleError}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="body">Isi Catatan</label>
        <textarea
          id="body"
          placeholder="Tuliskan catatanmu disini.."
          value={body}
          onChange={onBodyChangeEventHandler}
          className="w-full h-52 resize-none p-3 my-3 border rounded-lg focus:outline-none"
        />
        {bodyError && <span className="text-sm text-red-100">{bodyError}</span>}
      </div>
      <button
        type="submit"
        className="w-full p-3 text-white-100 bg-green-100 border rounded-lg hover:bg-green-200"
      >
        Buat
      </button>
    </form>
  );
};

export default NoteInput;
