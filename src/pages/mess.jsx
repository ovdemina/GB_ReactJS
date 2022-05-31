import * as React from "react";
import "../components/app.css";
import { useDispatch, useSelector } from "react-redux";
import { messSelector } from "../redux/redusers/messReducer/selectors";
import { useParams } from "react-router-dom";
import { DELETE_MESS } from "../redux/actions/actionTypes";
import { ADD_MESS } from "../redux/actions/actionTypes";
import { useState } from "react";


export function Mess() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const {idi} = useParams();
  const chatMess = useSelector(messSelector);
  const mess = chatMess.filter((mess) => {
    if(!idi) return true;
    return mess.chatId === Number(idi)
  })
  
const addMess = () => {
    const obj = {
        id: Math.random(),
        chatId: idi,
        title: title
    }
    dispatch({type: ADD_MESS, payload: obj})
}

  const deleteMess = (id) => {
    dispatch({type: DELETE_MESS, payload: id})
  } 



  return (
    <div>
        <input className="input" value={title} onChange={(e)=> setTitle(e.target.value)} />
        <button className="button" onClick={addMess}>add message</button>

        
            {mess.map((item) => (
                <div className="item" key = {item.id}>
                    <div><button className="button" onClick = {() => deleteMess(item.id)}>x</button></div>
                    <div className="mess">{item.title}</div>
                    
                </div>  
            ))}
        
    </div>
  );
}