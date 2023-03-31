import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getArchive } from "./redux-stuff/actions";
import Note from "./Note";
import NewNote from "./NewNote";
function DetailedNews() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const archive = useSelector((store) => store.archive);
  const [noteArea, setNoteArea] = useState(false);
  const [newsId, setNewsId] = useState(0);

  const handleNoteArea = (id) => {
    setNoteArea(!noteArea);
    setNewsId(id);
  };
  useEffect(() => {
    dispatch(getArchive());
  }, []);
  let resultJsx = "";
  if (archive == null) {
    resultJsx = "Loading..";
  } else if (archive.length == 0) {
    resultJsx = "No archived news.";
  } else {
    resultJsx = archive.filter((a) => a.news_id == id)[0];
  }
  console.log(resultJsx);
  return (
    <div className="w-1/2 mx-auto p-4">
      <h2 className="text-2xl font-bold">{resultJsx.title}</h2>
      <p className="mt-2 italic text-sm">
        {resultJsx.publishedAt.slice(0, 10)}
      </p>
      <p className="mt-4">{resultJsx.description}</p>
      <div className="flex justify-between">
        <a href={resultJsx.url} target="_blank">
          <button className="mt-4 p-2 border-2 border-black font-bold hover:bg-black hover:text-white">
            Read More
          </button>
        </a>
        <button className="mt-4 p-2 border-2 border-black font-bold hover:bg-black hover:text-white">
          Unarchive
        </button>
        <button
          className="mt-4 p-2 border-2 border-black font-bold hover:bg-black hover:text-white"
          onClick={() => handleNoteArea(id)}
        >
          Add Note
        </button>
      </div>
      <div>
        {!noteArea && resultJsx.notes && Array.isArray(resultJsx.notes) ? (
          resultJsx.notes.map((n) => <Note key={n.note_id} n={n} />)
        ) : (
          <NewNote
            newsId={newsId}
            handleNoteArea={handleNoteArea}
            setNoteArea={setNoteArea}
            noteArea={noteArea}
          />
        )}
      </div>
    </div>
  );
}

export default DetailedNews;
