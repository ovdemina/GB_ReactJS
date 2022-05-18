import React, { useEffect, useState, useRef } from "react";
import "./app.css";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";


export function ChatBoard() {
  console.log("update");
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);
  const ref = useRef(null);

  const addAuthor = (e) => {
    setAuthor(e);
  };

  const addText = (e) => {
    setText(e);
  };

  const addMessage = (e) => {
    e.preventDefault();
    let randomId = Math.random();
    setMessages([
      ...messages,
      {
        author: author,
        text: text,
        id: randomId,
      },
    ]);
    // setAuthor("");
    setText("");
    ref.current.focus();
  };

  useEffect(() => {
    if (messages[0]) {
      setTimeout(() => {
        alert("Your message has been published");
      }, 1500);
    }
  }, [messages]);

  return (
        <div className="messages">
          <h2 className="messageList">Message List: </h2>
          {messages.map((message) => (
            <div className="chat" key={message.id}>
              <div className="author">{message.author}</div>
              <div className="text">{message.text}</div>
            </div>
          ))}

          <form>
            <div className="label">
              <TextField
                className="input inputAuthor"
                label="Author"
                value={author}
                onChange={(e) => addAuthor(e.target.value)}
                inputRef={ref}
              />
            </div>
            <div className="label">
              <TextField
                className="input inputAuthor"
                label="Message"
                value={text}
                onChange={(e) => addText(e.target.value)}
                inputRef={ref}
              />
            </div>
            <Button variant="contained" onClick={addMessage}>
              add Message
            </Button>
          </form>
        </div>
  );
}
