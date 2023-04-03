import React, { useState } from "react";
import { formatISO } from "date-fns";
import { useDispatch } from "react-redux";
import { deleteNote } from "./redux-stuff/actions";
import EditNote from "./EditNote";
function Note(props) {
  const { n } = props;
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteNote({ note_id: n.note_id, news_id: n.news_id }));
  };
  const [editArea, setEditArea] = useState(false);
  const handleEditArea = () => {
    setEditArea(!editArea);
  };
  return (
    <div className="bg-white border-2 border-black shadow-sm mb-4 mt-8 p-4 box-border">
      {!editArea ? (
        <>
          <div className="flex justify-between">
            <p className="text-sm italic box-border">
              {formatISO(n.date, { representation: "date" })}
            </p>
            <div className="flex">
              <img
                onClick={handleEditArea}
                src="/images/edit.png"
                className="w-6 h-6 mr-4"
              />
              <img
                onClick={handleDelete}
                src="/images/delete.png"
                className="w-6 h-6"
              />
            </div>
          </div>
          <h2 className="text-xl font-bold mb-2 overflow-wrap: break-all">
            {n.title}
          </h2>
          <p className="overflow-wrap: break-all">{n.body}</p>
        </>
      ) : (
        <EditNote
          editArea={editArea}
          setEditArea={setEditArea}
          handleEditArea={handleEditArea}
          news={n}
        />
      )}
    </div>
  );
}

export default Note;
