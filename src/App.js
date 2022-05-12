import React, { useEffect, useState } from "react";
import "./App.css";
import { Message } from "./Message";

export function App() {
  console.log("update");
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);

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
    setAuthor("");
    setText("");
  };

  useEffect(() => {
    //const botMessage = "Your message has been published";
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
      <h2 className="messageList">Message List: </h2>

      {messages.map((message) => (
        <div className="chat" key={message.id}>
          <div className="author">{message.author}</div>
          <div className="text">{message.text}</div>
        </div>
      ))}

      <form>
        <label className="label">
          Author:
          <input
            className="input inputAuthor"
            type="text"
            value={author}
            onChange={(e) => addAuthor(e.target.value)}
            placeholder="Ivan"
          />
        </label>
        <label className="label">
          Message:
          <textarea
            rows="3"
            className="input inputText"
            value={text}
            onChange={(e) => addText(e.target.value)}
            placeholder="Hello!"
          />
        </label>
        <button className="button" onClick={addMessage}>
          add Message
        </button>
      </form>
    </div>
  );
}
