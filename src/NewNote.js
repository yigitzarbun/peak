import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addNote } from "./redux-stuff/actions";

function NewNote(props) {
  const { newsId, handleNoteArea } = props;
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
  return (
    <div>
      <form onSubmit={handleSubmit(handleNote)}>
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
          <textArea
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
