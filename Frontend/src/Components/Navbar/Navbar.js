import "./Navbar.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useContextValue } from '../../Context/Context';

function Navbar(props) {
  // const[{basket}, dispatch] = useContextValue();
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
              Cart
            </Link>
            {/* <span>{basket.length}</span> */}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
