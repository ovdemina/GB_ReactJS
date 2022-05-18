import React from "react";
import { Outlet } from "react-router-dom";
import "./app.css";
import { CustomLink } from "./CustomLink";
import { Message } from "./message";

export function Home() {
  return (
    <div className="app">
        <header className="app-header">
            <div className="title">Reactboard Messenger</div>
            <Message mes="Welcome to the new messenger!" />
        </header>
        <nav className="home">     
            <CustomLink to='/profile'> 
                Profile
            </CustomLink>
            <CustomLink to='/chats'>
                Chats
            </CustomLink>
        </nav>
        <main>
            <Outlet />
        </main>
    </div>
  );
}