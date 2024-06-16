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
    <form className="note-input" onSubmit={onSubmitEventHandler}>
      <div className="form-group">
        <label htmlFor="title">Judul Catatan</label>
        <input
          type="text"
          id="title"
          placeholder="Tuliskan judul catatan.."
          value={title}
          onChange={onTitleChangeEventHandler}
        />
        {titleError && <span className="error-message">{titleError}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="body">Isi Catatan</label>
        <textarea
          id="body"
          placeholder="Tuliskan catatanmu disini.."
          value={body}
          onChange={onBodyChangeEventHandler}
        />
        {bodyError && <span className="error-message">{bodyError}</span>}
      </div>
      <button type="submit">Buat</button>
    </form>
  );
};

export default NoteInput;
