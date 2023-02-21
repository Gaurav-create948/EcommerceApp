import "./Navbar.css";
import { useState, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import UserContext  from '../../Context/Context';
import { Button } from "react-bootstrap";

function Navbar() {
  const user = useContext(UserContext);
  let cartLength = user.userInfo.Cart.length;
  let isAuth = user.userInfo.isAuthenticated;
  let Email = user.userInfo.Email;

  async function handleClick(){
    await fetch('http://localhost:5000/logout', {
      credentials : "include"
    })
    .then(res => {
      if(res.status == 200){
        user.resetUserInfo();
        window.location.replace('/');
      }
    })
  }

  return (
    <div className="Navbar">
      <div className="logo">
        <Link to={"/"}>
          {
            <strong>
              Project
            </strong>
          }
        </Link>
      </div>
      <div className="search-bar">
        <form action="/" method="post">
          <input typeof="text" name="search" />
          <button typeof="search">
            <SearchIcon className="search-icon" />
          </button>
        </form>
      </div>
      <div className="NavLinks">
        <ul className="ul-list">
          <li>
            <Link to="/signup">{(isAuth) ? Email : "signup"}</Link>
          </li>
          <li>
            <Link to="/cart">
              <LocalMallIcon />
              <span>{cartLength}</span>
            </Link>
          </li>
          <li>
            <Link to="#" style={(isAuth)?{display:"inline"}:{display:"none"}} onClick={handleClick}>Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
