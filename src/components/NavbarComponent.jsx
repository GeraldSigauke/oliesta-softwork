import React, {useContext} from 'react';
import { ThemeContext } from '../App';
import { useState } from 'react';
import { images } from '../constants';
import NavbarLink from "./NavbarLink";
import { navbarLink } from "../data";
import { NavLink, Link } from 'react-router-dom';

const NavbarComponent = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  const [navbar, setNavbar] = useState(false);

  return (
    <nav id='navbar' className="bg-[#2c5282] text-white w-full shadow fixed top-0 z-50">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="#top">
              <h2 className="text-3xl font-bold cursor-pointer flex items-center">
                <img id='logo' className='' src={ images.logo } alt="logo" />
              </h2>
            </a>
            <div className="md:hidden">
              <button
                className="p-2 rounded-md outline-none 
                focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              
              {navbarLink.map(navbarLink => (
                <NavbarLink to={ navbarLink.id } navbarLink={ navbarLink } />
              ))}

              <li className='justify-between flex items-center'>
                <label className="mr-2">{theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</label>
                <label id='switch'>
                  <input type={'checkbox'} onChange={()=>toggleTheme()} />
                  <div id='slider'></div>
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
