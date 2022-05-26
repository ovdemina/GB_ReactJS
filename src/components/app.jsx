import React from "react";
import "./app.css";
import { Route, Routes } from "react-router-dom";
import { Chats } from "../pages/chats";
import { NotFound } from "../pages/notFound";
import { Profile } from "../pages/profile";
import { Home } from "./home";
import { useDispatch, useSelector } from "react-redux";



export function App() {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch();

  const increase = () => {
    dispatch ({type: "increase"})
  }
  const decrease = () => {
    dispatch ({type: "decrease"})
  }
  return (
    <>
        <Routes>
            <Route path={"/"} element={<Home />}>
                <Route index element={<Profile />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/chats" element={<Chats />} />
                <Route path="/*" element={<NotFound />} />
            </Route>
        </Routes>
        <div className="count">
          <div>
            <button className="countButton" onClick={decrease}>-</button>
          </div>
          {count}
          <div>
            <button className="countButton" onClick={increase}>+</button>
          </div>
        </div>
        </>
  );
}
