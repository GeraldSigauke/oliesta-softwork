import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { images } from '../constants';
import NavbarPadding from '../components/NavbarPadding';

const HomePage = () => {
  return (
    <>
      <NavbarPadding />
      {/* <!-- Container for demo purpose --> */}
      <div id='home'>
        {/* <!-- Section: Design Block --> */}
        <section id='home' class="">
          <div
            class="px-6 py-12 md:px-12 text-gray-800 text-center lg:text-left"
          >
            <div class="container mx-auto xl:px-32">
              <div class="grid lg:grid-cols-2 gap-12 flex items-center">
                <div class="mt-12 lg:mt-0">
                  <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                    Let's Get Your <br />
                    <div className='typewriter'>
                      <span class="text-[#2c5282]">Business Online</span>
                    </div>
                  </h1>
                  <NavLink
                    to='/contactus'
                  >
                    <button
                    class="inline-block px-7 py-3 mr-2 bg-[#2c5282] text-white font-medium text-sm leading-snug uppercase rounded shadow-md focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    role="button"
                    id='blue-button'
                  >
                    Get started
                  </button>
                    
                  </NavLink>
                  <NavLink
                    to="/about"
                  >
                    <button
                      class="inline-block px-7 py-3 bg-transparent text-[#2c5282] font-medium text-sm leading-snug uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      role="button"
                      id='white-button'
                      >
                    Learn more
                    </button>
                  </NavLink>
                </div>
                <div class="mb-12 lg:mb-0">
                  <img
                    src="https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    class="w-full rounded-lg shadow-lg hover:scale-110"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Section: Design Block --> */}
      </div>
      {/* <!-- Container for demo purpose --> */}
    </>
  );
};

export default HomePage;
