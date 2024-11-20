import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Header() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap justify-between items-center p-3 bg-gray-800 text-white">
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/shop"}>Shop</Link>
      </li>
      <li>
        <Link to={"/about"}>About</Link>
      </li>
    </div>
  );
}

export default Header;
