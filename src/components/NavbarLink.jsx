import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const NavbarLink = ({navbarLink}) => {
  return (
    <>
        <div className="hover:text-indigo-200">
        <NavLink to={ navbarLink.url }>{ navbarLink.link }</NavLink>
        </div>
    </>
  )
}

export default NavbarLink