import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addNote } from "./redux-stuff/actions";
import { useNavigate } from "react-router-dom";

function NewNote(props) {
  const { newsId, handleNoteArea, setNoteArea, noteArea } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });
  const handleNote = (data) => {
    const dataWide = {
      ...data,
      note_id: Date.now(),
      news_id: newsId,
    };
    handleNoteArea(dataWide.news_id);
    dispatch(addNote(dataWide));
    reset();
    navigate(`/archived/${newsId}`);
  };
  const handleDiscard = () => {
    setNoteArea(!noteArea);
    reset();
  };
  return (
    <div className="mt-8 ">
      <form
        className="newNote bg-white shadow-sm flex flex-col p-4 "
        onSubmit={handleSubmit(handleNote)}
      >
        <img
          onClick={handleDiscard}
          className="w-6 h-6"
          src="/images/cancel.png"
        />
        <h1 className="text-2xl font-bold text-center">New Note</h1>
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
        {errors.title && <span>{errors.title.message}</span>}
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
        {errors.body && <span>{errors.body.message}</span>}
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

export default NewNote;
