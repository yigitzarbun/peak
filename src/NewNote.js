import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addNote } from "./redux-stuff/actions";

function NewNote(props) {
  const { newsId, handleNoteArea, setNoteArea, noteArea } = props;
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
  };
  const handleDiscard = () => {
    setNoteArea(!noteArea);
    reset();
  };
  return (
    <div>
      <form
        className="bg-white shadow-sm w-1/2 mx-auto flex flex-col p-4"
        onSubmit={handleSubmit(handleNote)}
      >
        <img
          onClick={handleDiscard}
          className="w-6 h-6"
          src="/images/cancel.png"
        />
        <h1>New Note</h1>
        <label>
          <input
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
            {...register("body", {
              required: "This is a required field",
              maxLength: { value: 400, message: "Max 400 characters" },
            })}
            placeholder="Your notes.."
            name="body"
            id="body"
          />
        </label>
        <button type="submit" disabled={!isValid}>
          Done
        </button>
      </form>
    </div>
  );
}

export default NewNote;
