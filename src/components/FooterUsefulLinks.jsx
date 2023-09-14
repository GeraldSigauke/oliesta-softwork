import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const FooterUsefulLinks = ({ footerUsefulLinks }) => {
  return (
    <>
        <p class="mb-4">
        <NavLink to={ footerUsefulLinks.url } class="text-white dark:text-white">
            { footerUsefulLinks.usefulLink }
        </NavLink>
        </p>
    </>
  )
}

export default FooterUsefulLinks