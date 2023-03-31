import React from "react";

function Note(props) {
  const { n } = props;
  return (
    <div className="bg-white border-2 border-black shadow-sm mb-4 mt-8 p-4">
      <h2>{n.title}</h2>
      <p>{n.date}</p>
      <p>{n.body}</p>
    </div>
  );
}

export default Note;
