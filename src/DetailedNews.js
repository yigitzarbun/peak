import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getArchive, removeArchive } from "./redux-stuff/actions";
import Note from "./Note";
import NewNote from "./NewNote";
function DetailedNews() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const archive = useSelector((store) => store.archive);
  const [noteArea, setNoteArea] = useState(false);
  const [newsId, setNewsId] = useState(0);
  const handleNoteArea = (id) => {
    setNoteArea(!noteArea);
    setNewsId(id);
  };
  const handleRemove = () => {
    dispatch(removeArchive(Number(id)));
    navigate("/archive");
  };
  let resultJsx = "";
  if (archive == null) {
    resultJsx = "Loading..";
  } else if (archive.length == 0) {
    resultJsx = "No archived news.";
  } else {
    resultJsx = archive.filter((a) => a.news_id == id)[0];
  }
  useEffect(() => {
    dispatch(getArchive());
  }, []);
  return (
    <div className="w-1/2 mx-auto p-4 max-[800px]:w-2/3 max-[550px]:w-full">
      <Link to="/archive">
        <div className="flex items-center mb-8">
          <img src="/images/arrow.png" alt="back" className="w-6 h-6 mr-4" />
          <p className="text-sm">Back to Archive</p>
        </div>
      </Link>
      {archive && (
        <>
          <h2 className="text-2xl font-bold">{resultJsx.title}</h2>
          <p className="mt-2 italic text-sm">{resultJsx.publishedAt}</p>
          <p className="mt-4">{resultJsx.description}</p>
          <div className="flex justify-between max-[880px]:flex-col max-[800px]:w-1/2 max-[880px]:mx-auto">
            <a href={resultJsx.url} target="_blank">
              <button className="mt-4 p-2 border-2 border-black font-bold hover:bg-black hover:text-white max-[880px]:w-full">
                Read More
              </button>
            </a>
            <button
              onClick={handleRemove}
              className="mt-4 p-2 border-2 border-black font-bold hover:bg-black hover:text-white"
            >
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
            {!noteArea &&
              resultJsx.notes &&
              Array.isArray(resultJsx.notes) &&
              resultJsx.notes.map((n) => <Note key={n.note_id} n={n} />)}
          </div>
          <div>
            {noteArea && (
              <NewNote
                newsId={newsId}
                handleNoteArea={handleNoteArea}
                setNoteArea={setNoteArea}
                noteArea={noteArea}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default DetailedNews;
