import React from "react";
import NotificationBar from "../NotificationBar/NotificationBar";

const Header = () => {
  return (
    <header>
      <NotificationBar />
      <div>{/* <img src="./src/assets/logo.png" width={100} /> */}</div>
    </header>
  );
};

export default Header;
