import React from "react";
import "./app.css";
import { Route, Routes } from "react-router-dom";
import { Chats } from "../pages/chats";
import { NotFound } from "../pages/notFound";
import { Profile } from "../pages/profile";
import { Home } from "./home";

export function App() {
  return (
        <Routes>
            <Route path={"/"} element={<Home />}>
                <Route index element={<Profile />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/chats" element={<Chats />} />
                <Route path="/*" element={<NotFound />} />
            </Route>
        </Routes>
  );
}
