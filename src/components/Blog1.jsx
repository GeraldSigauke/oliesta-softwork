import React from 'react';
import NavbarPadding from './NavbarPadding';
import { BsArrowLeft } from 'react-icons/bs';
import { NavLink, Link } from 'react-router-dom';

const Blog1 = () => {
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
          <img src="https://mdbootstrap.com/img/new/standard/city/028.jpg" class="w-full shadow-lg rounded-lg mb-6" alt="" />

          <div class="flex items-center mb-6">
            <img src="https://mdbootstrap.com/img/Photos/Avatars/img (23).jpg" class="rounded-full mr-2 h-8" alt=""
              loading="lazy" />
            <div>
              <span> Published <u>08.10.2023</u> by </span>
              <a href="#!" class="font-medium">Gerald Sigauke</a>
            </div>
          </div>

          <h1 class="font-bold text-3xl mb-6">A strong online presence gives your business the following benefits</h1>

          <p class="text-gray-500">
            It Makes It Easier For Your Business to Showcase Its Products and Services. It Makes It Easier For Customers to Find Your Business. It Makes It Easier To Strengthen Your Brand By Giving Your Business An Internet Identity Or Personality. It Makes It Easier To Market Your Company’s Brand. It Makes It Easier For Your Business to Operate 24 Hours A Day, Seven Days A Week. As You Can Deduce, This Significantly Increases Your Business' Profit Margins. It Makes It Easier For Your Business To Build Relationships. It Makes It Easier To Extend The Reach Of Your Business. It is The First Step Towards Attaining A Global Business Status. It Provides Another Official Channel Of Communication To Reach Customers. A Channel With Global Reach. A Channel Which Never Sleeps.
          </p>
        </section>
        {/* <!-- Section: Design Block --> */}
        
      </div>
      {/* <!-- Container for demo purpose -->         */}
    </>
  )
}

export default Blog1