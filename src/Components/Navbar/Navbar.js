import "./Navbar.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useContextValue } from '../../Context/Context';

function Navbar(props) {
  const[{basket}, dispatch] = useContextValue();
  return (
    <div className="Navbar">
      <div className="logo">
        <Link to={"/"}>
          {
            <strong>
              <h2>
                GITFT<i>lelo</i>
              </h2>
            </strong>
          }
        </Link>
      </div>
      <div className="search-bar">
        <form action="/" method="GET">
          <input typeof="text" name="search" />
          <button typeof="search">
            <SearchIcon className="search-icon" />
          </button>
        </form>
      </div>
      <div className="NavLinks">
        <ul className="ul-list">
          <li>
            <Link to="/cart">Hello guest</Link>
          </li>
          <li>
            <Link to="/my-orders">Your Orders</Link>
          </li>
          <li>
            <Link to="/cart">
              <LocalMallIcon />
            </Link>
            <span>{basket.length}</span>
          </li>
        </ul>
      </div>
    </div>
    // </Router>
  );
}

export default Navbar;
