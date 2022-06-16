import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSelector }  from "../redux/redusers/regUserReducer/selectors";
import { useNavigate } from "react-router-dom";
import { loginInitiate } from "../redux/actions/actions";
import "./app.css";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/main");
    }
  }, [navigate, user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    dispatch(loginInitiate(email, password));
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input className="input" placeholder="E-mail" type={"text"} onChange={(e) => setEmail(e.target.value)} />
        <input className="input" placeholder="Password" type={"text"} onChange={(e) => setPassword(e.target.value)} />
        <button className = "button otstup" type="submit">sign in</button>
      </form>
    </div>
  );
}
