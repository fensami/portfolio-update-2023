import React from 'react';
import { Link } from 'react-router-dom';

import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

const Navbar = () => {
  const list = <>
  <Link>Home</Link>
  <Link>About</Link>
  <Link>Contact</Link>
  <Link>Project</Link>
  </>
  return (
    <div>
      <div className="navbar fixed  bg-[#176B87]">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {list}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl text-white">Phone</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-6 text-white font-bold">
      {list}
    </ul>
  </div>
  <div className="navbar-end gap-5">
    {/* <a className="btn">Button</a> */}
    <AwesomeButton type="primary">F</AwesomeButton>
    <AwesomeButton type="primary">T</AwesomeButton>
  </div>
</div>
    </div>
  );
};

export default Navbar;