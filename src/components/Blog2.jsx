import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { NavLink, Link } from 'react-router-dom';

const Blog2 = () => {
  return (
    <>
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
          <img src="https://mdbootstrap.com/img/new/standard/city/033.jpg" class="w-full shadow-lg rounded-lg mb-6" alt="" />

          <div class="flex items-center mb-6">
            <img src="https://mdbootstrap.com/img/Photos/Avatars/img (23).jpg" class="rounded-full mr-2 h-8" alt=""
              loading="lazy" />
            <div>
              <span> Published <u>08.10.2023</u> by </span>
              <a href="#!" class="font-medium">Gerald Sigauke</a>
            </div>
          </div>

          <h1 class="font-bold text-3xl mb-6">Billion Dollar Companies Agree</h1>

          <p class="text-gray-500">
            Don't just take our word for it. One of the founders of
            Microsoft, and its CEO for 25 years, once said:{' '}
            <strong className="text-[#2c5282]">
            “If your business is not on the Internet then your business
            will be out of business.”
            </strong>{' '}
            To put that into perspective, today Microsoft is a trillion
            dollar company. If your ambition is for your business to be just as big -- or bigger -- taking his advice will serve as more than just taking a step in the right direction. Netflix grew by taking this route. They went from being your regular mom and pop's DVD rental shop to being the online streaming juggernaut it is today. Disney, HBO, etc. followed suit. Amazon gained its trillion dollar status through the power of the internet. Starting an ecommerce site broadened their reach beyond compare. In China, Alibaba has attained its peerless status the same way.
          </p>
        </section>
        {/* <!-- Section: Design Block --> */}
        
      </div>
      {/* <!-- Container for demo purpose -->         */}
    </>
  )
}

export default Blog2