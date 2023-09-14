import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarComponent from './NavbarComponent';
import FooterComponent from './FooterComponent';

const Layout = () => {
  return (
    <>
      <NavbarComponent />
        <Outlet />
      <FooterComponent />
    </>
  );
};

export default Layout;
