import React, { useEffect, useState } from "react";
import { getArchive } from "./redux-stuff/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ArchivedNews from "./ArchivedNews";
import NewNote from "./NewNote";
function Archive() {
  const [noteArea, setNoteArea] = useState(false);
  const [newsId, setNewsId] = useState(0);
  const handleNoteArea = (id) => {
    setNoteArea(!noteArea);
    setNewsId(id);
  };
  const dispatch = useDispatch();
  const archive = useSelector((store) => store.archive);
  useEffect(() => {
    dispatch(getArchive());
  }, []);
  let resultJsx;
  if (archive == null) {
    resultJsx = "Loading archive..";
  } else if (archive.length == 0) {
    resultJsx = (
      <div className="mt-8 w-2/3 mx-auto text-center">
        <h2 className="font-bold text-4xl mb-4">Archive is empty</h2>
        <p className="mb-4">
          Take a peak at the top headlines and archive the ones that you'd like
          to store.
        </p>
        <Link
          className="border-2 mb-4 border-black p-2 hover:bg-black hover:text-white"
          to="/"
        >
          Visit News
        </Link>
        <img className="mt-8" src="/images/archive_empty.png" />
      </div>
    );
  } else {
    resultJsx = archive.map((news) => (
      <ArchivedNews
        noteArea={noteArea}
        setNoteArea={setNoteArea}
        handleNoteArea={handleNoteArea}
        key={news.title}
        news={news}
      />
    ));
  }
  return (
    <>
      {!noteArea ? (
        <div className="flex flex-wrap">{resultJsx}</div>
      ) : (
        <div>
          <NewNote
            newsId={newsId}
            handleNoteArea={handleNoteArea}
            setNoteArea={setNoteArea}
            noteArea={noteArea}
          />
        </div>
      )}
    </>
  );
}

export default Archive;
