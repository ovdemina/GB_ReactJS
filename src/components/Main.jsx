import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../redux/redusers/regUserReducer/selectors";
import { logoutInitiate } from "../redux/actions/actions";
import { useNavigate } from "react-router-dom";

export function Main() {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const navigate = useNavigate();

  const handleAuth = () => {
    if (user) {
      dispatch(logoutInitiate());
    }
    setTimeout(() => {
      navigate("/register");
    }, 2000);
  };
  return (
    <div>
      <button className = "button otstup" onClick={handleAuth}>Выйти</button>
    </div>
  );
}
