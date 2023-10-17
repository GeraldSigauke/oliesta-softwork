import React from 'react';
import NavbarPadding from './NavbarPadding';
import { BsArrowLeft } from 'react-icons/bs';
import { NavLink, Link } from 'react-router-dom';

const Blog3 = () => {
  return (
    <>
    <NavbarPadding />
      {/* <!-- Container for demo purpose --> */}
      <div class="container my-24 px-6 mx-auto">
        
        {/* <!-- Section: Design Block --> */}
        <section class="mb-32 text-gray-800">
          <NavLink to="/blog">
            <div className="flex mb-5">
              <BsArrowLeft className='w-7 h-7 mx-3' /> 
              <div className="text-lg  text-[#2c5282]">
                Go Back to Blogs
              </div>
            </div>
          </NavLink>            
          <img src="https://mdbootstrap.com/img/new/standard/city/079.jpg" class="w-full shadow-lg rounded-lg mb-6" alt="" />

          <div class="flex items-center mb-6">
            <img src="https://mdbootstrap.com/img/Photos/Avatars/img (23).jpg" class="rounded-full mr-2 h-8" alt=""
              loading="lazy" />
            <div>
              <span> Published <u>08.10.2023</u> by </span>
              <a href="#!" class="font-medium">Gerald Sigauke</a>
            </div>
          </div>

          <h1 class="font-bold text-3xl mb-6">How we Can Help You</h1>

          <p class="text-gray-500">
            A strong online presence is more than just having a good social
            media presence. You{' '}
            <span className="text-[#2c5282] font-bold">need</span> a
            beautiful, presentable, professionally made website which serves as your business' way to comunicate with the general public. If your website 
            looks good enough, and performs well enough, you will be drowning in a tsunami of new customers and new clients. That is where we come in! Are you still in doubt? Check{' '}
            <span className="text-[#2c5282] font-bold">
            <NavLink to="/portfolio">this</NavLink>
            </span>{' '}
            out:
          </p>
        </section>
        {/* <!-- Section: Design Block --> */}
        
      </div>
      {/* <!-- Container for demo purpose -->         */}
    </>
  )
}

export default Blog3