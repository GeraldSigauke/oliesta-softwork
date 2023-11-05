import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarComponent from './NavbarComponent';
import FooterComponent from './FooterComponent';
import GoToTheTopComponent from './GoToTheTopComponent';
// import NavTopComponent from './NavTopComponent';

const Layout = () => {
  return (
    <>
      <div id="origin" />
      <NavbarComponent />
        <Outlet />
        <GoToTheTopComponent />
      <FooterComponent />
    </>
  );
};

export default Layout;
