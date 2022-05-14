import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Message } from "./Message";
import { InsetList } from "./chats.js";

export function App() {
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
    <div className="app">
      <div className="app-header">
        <header className="title">Reactboard Messenger</header>
        <Message mes="Welcome to the new messenger!" />
      </div>
      <div className="board">
        <InsetList />
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
              {/* <input
            className="input inputAuthor"
            type="text"
            value={author}
            onChange={(e) => addAuthor(e.target.value)}
            placeholder="Ivan"
          /> */}
            </div>
            <div className="label">
              <TextField
                className="input inputAuthor"
                label="Message"
                value={text}
                onChange={(e) => addText(e.target.value)}
                inputRef={ref}
              />
              {/* <textarea
            rows="3"
            className="input inputText"
            value={text}
            onChange={(e) => addText(e.target.value)}
            placeholder="Hello!"
          /> */}
            </div>
            <Button variant="contained" onClick={addMessage}>
              add Message
            </Button>
            {/* <button className="button" onClick={addMessage}>
          add Message
        </button> */}
          </form>
        </div>
      </div>
    </div>
  );
}
