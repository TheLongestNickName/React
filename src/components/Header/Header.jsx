import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img
        alt=""
        src="https://placeit-assets1.s3-accelerate.amazonaws.com/custom-pages/2019-logo-maker/Esports-Logo-Maker.png"
      ></img>
      <div className={s.loginBlock}>
        {props.isAuth
        ? <div>{props.login} - <button onClick={props.LogoutThunk}>Log out</button></div>
        : <NavLink to={"/login"}>Login</NavLink>
        }
        
      </div>
    </header>
  );
};

export default Header;
