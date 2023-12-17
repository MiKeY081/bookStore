import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <ul className="flex justify-around items-center text-xl bg-slate-300 opacity-60 top-0 sticky h-16">
        <li>
          <Link
            to={"/"}
            className="hover:font-bold hover:scale-110 transition-all delay-100"
          >
            BookStore
          </Link>
        </li>
        <li>
          <Link
            to={"/"}
            className="hover:font-bold hover:scale-110 transition-all delay-100"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to={"/manage"}
            className="hover:font-bold hover:scale-110 transition-all delay-100"
          >
            Manage Books
          </Link>
        </li>
        <li>
          <Link
            to={"/"}
            className="hover:font-bold hover:scale-110 transition-all delay-100"
          >
            Login
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Header;
