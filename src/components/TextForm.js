import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  const handleUpCase = () => {
    let textarea = document.getElementById("Textarea1");
    let start = textarea.selectionStart;
    let end = textarea.selectionEnd;
    // console.log(start)
    // console.log(end)
    if (start === end) {
      setText(text.toUpperCase());
    } else {
      let selectedText = textarea.value.substring(start, end);
      // console.log(selectedText)

      // Convert the selected text to uppercase
      let uppercaseText = selectedText.toUpperCase();
      // Replace the selected text with the uppercase version
      let textBeforeSelection = textarea.value.substring(0, start);
      let textAfterSelection = textarea.value.substring(end);
      let lasttextarea =
        textBeforeSelection + uppercaseText + textAfterSelection;
      setText(lasttextarea);
    }
    textarea.selectionStart = 0;
    textarea.selectionEnd = 0;
    props.showAlert("Converted to Uppercase!", "success");
  };
  const handleClearClick = () => {
    let textarea = document.getElementById("Textarea1");
    let start = textarea.selectionStart;
    let end = textarea.selectionEnd;
    // console.log(start)
    // console.log(end)
    if (start === end) {
      setText("");
    } else {
      // console.log(selectedText)

      // Convert the selected text to uppercase
      // Replace the selected text with the uppercase version
      let textBeforeSelection = textarea.value.substring(0, start);
      let textAfterSelection = textarea.value.substring(end);
      let lasttextarea = textBeforeSelection + textAfterSelection;
      setText(lasttextarea);
    }
    textarea.selectionStart = 0;
    textarea.selectionEnd = 0;

    props.showAlert("Clear Text!", "success");
  };
  const handleLowerCase = () => {
    let textarea = document.getElementById("Textarea1");
    let start = textarea.selectionStart;
    let end = textarea.selectionEnd;
    // console.log(start)
    // console.log(end)
    if (start === end) {
      setText(text.toLowerCase());
    } else {
      let selectedText = textarea.value.substring(start, end);
      // console.log(selectedText)

      // Convert the selected text to uppercase
      let uppercaseText = selectedText.toLowerCase();
      // Replace the selected text with the uppercase version
      let textBeforeSelection = textarea.value.substring(0, start);
      let textAfterSelection = textarea.value.substring(end);
      let lasttextarea =
        textBeforeSelection + uppercaseText + textAfterSelection;
      setText(lasttextarea);
    }
    textarea.selectionStart = 0;
    textarea.selectionEnd = 0;

    props.showAlert("Converted to Lowercase!", "success");
  };
  const handleCopyClick = () => {
    let textarea = document.getElementById("Textarea1");
    let start = textarea.selectionStart;
    let end = textarea.selectionEnd;
    // console.log(start)
    // console.log(end)
    if (start === end) {
      navigator.clipboard.writeText(textarea.value);
    } else {
      let selectedText = textarea.value.substring(start, end);
      // console.log(selectedText)
      navigator.clipboard.writeText(selectedText);
    }
    textarea.selectionStart = 0;
    textarea.selectionEnd = 0;
    navigator.clipboard
      .readText()
      .then((text) => {
        console.log("Clipboard text:", text);
        props.showAlert(`Text copied! "${text}"`, "success");
      })
      .catch((err) => {
        console.error("Clipboard access error:", err);
        props.showAlert(`Text copy failed! ${err}`, "error");
      });
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/).join(" ").split(/\n+/);
    setText(newText.join("\n"));
  };
  const handleOnchange = (event) => {
    let newText = event.target.value;
    setText(newText);
  };
  return (
    <>
      <div className="container my-3" style={props.darkMode}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnchange}
            id="Textarea1"
            rows="8"
            style={props.darkMode}
          ></textarea>
        </div>
        <button className="btn btn-primary m-2" onClick={handleUpCase}>
          Click here For Upper case
        </button>
        <button className="btn btn-secondary m-2" onClick={handleLowerCase}>
          Click here For Lower case
        </button>
        <button className="btn btn-danger m-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-success m-2" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button className="btn btn-info m-2" onClick={handleExtraSpace}>
          Remove Extra Space
        </button>
      </div>
      <div
        className={`container text-${
          props.mode === "success" ? "black" : "info"
        }`}
      >
        <h1>Your Text Summary</h1>
        <p>
          {text.length} charecters{" "}
          {text.split(/\s+|\n+/).filter((item) => item !== "").length} words{" "}
          {text.split("\n").filter((item) => item !== "").length} lines
        </p>
      </div>
    </>
  );
}
