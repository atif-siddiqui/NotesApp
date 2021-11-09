import React from "react";
import { NoteItem } from "./NoteItem";

export const Notes = (props) => {
  let myStyle = {
    minHeight: "70vh",
  };
  return (
    <div className="container my-3" style={myStyle}>
      <h3 className="text-center my-3">Notes List</h3>
      {props.notes.length === 0
        ? "No Notes to Display!"
        : props.notes.map((note) => {
            return (
              <>
                <NoteItem
                  note={note}
                  key={note.srNo}
                  onDelete={props.onDelete}
                />
                <hr className="mx-2" />
              </>
            );
          })}
    </div>
  );
};
