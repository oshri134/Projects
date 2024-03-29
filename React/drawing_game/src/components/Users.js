import React, { Component } from "react";
import "./Users.css";
const Users = () => {
  const firstPlayer = window.localStorage.getItem("first_player");
  const secondPlayer = window.localStorage.getItem("second_player");
  return (
    <section className="user_box">
      <h1>Users</h1>
      <h3>First player-{firstPlayer}</h3>
      <h3>Second Player-{secondPlayer}</h3>
    </section>
  );
};

export default Users;
