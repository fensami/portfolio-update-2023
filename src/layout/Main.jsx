import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/share/Navbar/Navbar';
import Footer from '../pages/share/Footer/Footer';

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;