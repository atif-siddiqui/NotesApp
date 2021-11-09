import "./App.css";
import Header from "./MyComponent/Header";
import { Notes } from "./MyComponent/Notes";
import { NoteItem } from "./MyComponent/NoteItem";
import { Footer } from "./MyComponent/Footer";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { AddNotes } from "./MyComponent/AddNotes";

function App() {
  let initNote;
  if (localStorage.getItem("notes") === null) {
    initNote = [];
  } else {
    initNote = JSON.parse(localStorage.getItem("notes"));
  }

  const onDelete = (note) => {
    console.log("I am onDelete of note!", note);
    setNotes(
      notes.filter((e) => {
        return e !== note;
      })
    );
    localStorage.getItem("notes", JSON.stringify(notes));
  };

  const addNotes = (title, desc) => {
    console.log("I am adding this notes", title, desc);
    let sno;
    if (notes.length === 0) {
      sno = 0;
    } else {
      sno = notes[notes.length - 1].sno + 1;
    }
    const myNote = {
      sno: sno,
      title: title,
      desc: desc,
    };

    setNotes([...notes, myNote]);
    console.log(myNote);
  };

  const [notes, setNotes] = useState(initNote);
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <>
      <Header title="Notes App" searchBar={true} />
      <AddNotes addNotes={addNotes} />
      <Notes notes={notes} onDelete={onDelete} />

      <Footer />
    </>
  );
}

export default App;
