import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const NotePage = () => {
  const noteId = useParams().id;
  let [note, setNote] = useState(null);
  useEffect(() => {
    getNote();
  }, [noteId]);

  let getNote = async () => {
    let response = await fetch(`/api/notes/${noteId}`);
    let data = await response.json();
    setNote(data);
  };

  return (
    <div>
      <p>
        Single Page: {noteId}: {note?.body}
      </p>
    </div>
  );
};

export default NotePage;
