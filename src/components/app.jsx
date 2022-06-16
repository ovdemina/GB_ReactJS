import React from "react";
import "./app.css";
import { Route, Routes } from "react-router-dom";
import { Chats } from "../pages/chats";
import { NotFound } from "../pages/notFound";
import { Profile } from "../pages/profile";
import { Home } from "./home";
import { Mess } from "../pages/mess";
import { Register } from "./Register";
import { Login } from "./Login";
import { Main } from "./Main";



export function App() {

  return (
    <>
      <Routes>
          <Route path={"/"} element={<Home />}>
              <Route index element={<Register />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/chats/" element={<Chats />} />
              <Route path="/mess/:id" element={<Mess />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/main" element={<Main />} />
              <Route path="/*" element={<NotFound />} />

          </Route>
      </Routes>
    </>
  );
}
