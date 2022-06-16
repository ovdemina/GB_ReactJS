import { NavLink, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../redux/redusers/regUserReducer/selectors";
import { registerInitiate } from "../redux/actions/actions";
import "./app.css";

export function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [displayName, setDisplayName] = useState("");
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/main");
    }
  }, [user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      return;
    }
    dispatch(registerInitiate(email, password, displayName));
  };

  return (
    <div>
        <NavLink
          className = "button"
          to={"/login"}
        >
          sing up
        </NavLink>
      <h2 className="register">Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
        className="input"
          type="text"
          value={displayName}
          placeholder="Name"
          onChange={(e) => setDisplayName(e.target.value)}
        />
        <input
        className="input"
          type="text"
          value={email}
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
        className="input"
          type="text"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
        className="input"
          type="text"
          value={passwordConfirm}
          placeholder="Duplicate password"
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
        <button className = "button otstup" type="submit">sing up</button>
      </form>
    </div>
  );
}
