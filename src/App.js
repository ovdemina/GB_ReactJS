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
    setMessages([
      ...messages,
      {
        author: author,
        text: text,
      },
    ]);
    setAuthor("");
    setText("");
  };

  useEffect(() => {
    const botMessage = "Your message has been published";
    const lastMessage = messages[messages.length - 1];

    if (lastMessage !== undefined) {
      if (lastMessage.text !== botMessage) {
        setTimeout(() => {
          setMessages([...messages, { author: "bot", text: botMessage }]);
        }, 1000);

        console.log("lastmessage = " + lastMessage);
      }
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
        <div className="chat">
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
