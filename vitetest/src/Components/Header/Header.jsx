import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

function Header() {
  const [active, setActive] = useState(false);
  return (
    <div className="w-full flex flex-wrap bg-green-400 justify-between items-center">
      <div>
        <Link to="/">Logo</Link>
      </div>
      <div className="flex flex-wrap justify-between items-center">
        <div className="p-3 bg-green-200 hover:bg-green-400">
          <Link to="/">Home</Link>
        </div>
        <div className="p-3 bg-green-200 hover:bg-green-400">
          <Link to="/about">About</Link>
        </div>
        <div className="p-3 bg-green-200 hover:bg-green-400">
          <Link to="/github">Github</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
