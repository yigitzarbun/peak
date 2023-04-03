import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editNote, getArchive } from "./redux-stuff/actions";

function EditNote(props) {
  const { handleEditArea, setEditArea, news, editArea } = props;
  const archive = useSelector((store) => store.archive);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let selectedNews;
  let note;
  if (archive != undefined && Array.isArray(archive) && archive.length > 0) {
    selectedNews = archive.filter((n) => n.news_id == news.news_id)[0];
    note = selectedNews.notes.filter((n) => n.note_id == news.note_id)[0];
  }
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      title: note.title,
      body: note.body,
    },
  });

  const handleEdit = (data) => {
    const dataWide = {
      ...data,
      note_id: news.note_id,
      news_id: news.news_id,
    };
    dispatch(editNote(dataWide));
    reset();
    setEditArea(!editArea);
    navigate(`/archived/${news.news_id}`);
  };

  const handleDiscard = () => {
    setEditArea(!editArea);
    reset();
  };

  useEffect(() => {
    dispatch(getArchive());
  }, []);
  return (
    <div className="mt-8">
      <form
        className="editNote bg-white shadow-sm flex flex-col p-4"
        onSubmit={handleSubmit(handleEdit)}
      >
        <img
          onClick={handleDiscard}
          className="w-6 h-6"
          src="/images/cancel.png"
        />
        <h1 className="text-2xl font-bold text-center">Edit Note</h1>
        <label>
          <input
            className="w-full p-2 border-2 mt-8"
            {...register("title", {
              required: "Title is a required field",
              maxLength: { value: 50, message: "Max 50 characters" },
            })}
            placeholder="Title.."
            name="title"
            id="title"
          />
        </label>
        <label>
          <textarea
            className="w-full py-4 px-2 mt-4 border-2"
            {...register("body", {
              required: "This is a required field",
              maxLength: { value: 400, message: "Max 400 characters" },
            })}
            placeholder="Your notes.."
            name="body"
            id="body"
          />
        </label>
        <button
          className="border-2 border-black w-1/3 p-2 mt-4 hover:bg-black hover:text-white mx-auto"
          type="submit"
          disabled={!isValid}
        >
          Done
        </button>
      </form>
    </div>
  );
}

export default EditNote;
