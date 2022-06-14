import React from "react";
import { Users } from "../components/Users";
import "../components/app.css";

export function Profile() {
  return (
    <div>
      <h3 className="otstup">my profile</h3>
      <div>My name is Olga</div>
      <h3 className="otstup">my frends</h3>
      <Users />
    </div>
  );
}