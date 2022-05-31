import * as React from "react";
import "../components/app.css";
import { useSelector } from "react-redux";
import { chatsSelector } from "../redux/redusers/chatReducer/selectors";
import { NavLink } from "react-router-dom";


export function Chats() {
  const chats = useSelector(chatsSelector);
  return (
    <div className='board'>
        <div className='chatItem'>
          {
            chats.map((item) => (
              <NavLink key = {item.id} to ={`/mess/${item.id}`}>
                {item.name}
              </NavLink>
            ))
          }
        </div>
    

     </div>
  );
}
     
