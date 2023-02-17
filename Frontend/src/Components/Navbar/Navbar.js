import "./Navbar.css";
import { useState, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import UserContext  from '../../Context/Context';
import Cookies from 'js-cookie';

function Navbar(props) {
  const user = useContext(UserContext);
  return (
    <div className="Navbar">
      <div className="logo">
        <Link to={"/"}>
          {
            <strong>
              {/* <h2> */}
              {/* <img src="../../images/logo1.png" width={"100%"}></img> */}
              djfdksj
              {/* </h2> */} 
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
            <Link to="/signup">Hello {props.name}</Link>
          </li>
          <li>
            <Link to="/my-orders">Orders</Link>
          </li>
          <li>
            <Link to='/admin'>Admin</Link>
          </li>
          <li>
            <Link to="/cart">
              <LocalMallIcon />
              <span>{user.Cart.length}</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
