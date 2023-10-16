import React from 'react';
import NavbarPadding from '../components/NavbarPadding';
import { NavLink, Link } from 'react-router-dom';

const BloggingPage = () => {
  return (
    <>
      <NavbarPadding />
      {/* <!-- Container for demo purpose --> */}
      <div class="container my-24 px-6 mx-auto">
        {/* <!-- Section: Design Block --> */}
        <section class="mb-32 text-gray-800">
          <h2 class="text-3xl font-bold mb-12 text-center">
            Why Your Business Needs A{' '}
            <u class="text-[#2c5282]">Strong Online Presence</u>
          </h2>

          {/* <p class="mb-6">
                The year is {today.getFullYear()}. If your business doesn't already have a strong online presence, you are doing it wrong! What you are doing is the equivalent of driving a car with flat tyres. You are unwittingly sabotaging your own business.
              </p> */}

          <div class="grid lg:grid-cols-3 gap-6 xl:gap-x-12">

            <div class="flex flex-wrap lg:flex-column mb-12">
              <div class="grow-0 shrink-0 basis-auto w-full lg:w-12/12 mb-6 lg:mb-0">
                <div
                  class="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg"
                  style={{ backgroundPosition: '50%' }}
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src="https://mdbootstrap.com/img/new/standard/city/028.jpg"
                    class="w-full"
                    alt="Louvre"
                  />
                  <NavLink to="/blog1">
                    <div
                      class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                      style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                    ></div>
                  </NavLink>
                </div>
              </div>

              <div class="grow-0 shrink-0 basis-auto w-full lg:w-12/12 lg:pl-6">
                <h3 class="text-2xl font-bold mt-4 mb-4">
                  A strong online presence gives 
                  {/* your business the following
                  benefits */}
                </h3>

                <div class="text-[#2c5282] text-sm mb-4 flex items-center font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512"
                    class="w-4 h-4 mr-2"
                  >
                    {/* <!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --> */}
                    <path
                      fill="currentColor"
                      d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm160 215.5v6.93c0 5.87-3.32 11.24-8.57 13.86l-15.39 7.7a15.485 15.485 0 0 1-15.53-.97l-18.21-12.14a15.52 15.52 0 0 0-13.5-1.81l-2.65.88c-9.7 3.23-13.66 14.79-7.99 23.3l13.24 19.86c2.87 4.31 7.71 6.9 12.89 6.9h8.21c8.56 0 15.5 6.94 15.5 15.5v11.34c0 3.35-1.09 6.62-3.1 9.3l-18.74 24.98c-1.42 1.9-2.39 4.1-2.83 6.43l-4.3 22.83c-.62 3.29-2.29 6.29-4.76 8.56a159.608 159.608 0 0 0-25 29.16l-13.03 19.55a27.756 27.756 0 0 1-23.09 12.36c-10.51 0-20.12-5.94-24.82-15.34a78.902 78.902 0 0 1-8.33-35.29V367.5c0-8.56-6.94-15.5-15.5-15.5h-25.88c-14.49 0-28.38-5.76-38.63-16a54.659 54.659 0 0 1-16-38.63v-14.06c0-17.19 8.1-33.38 21.85-43.7l27.58-20.69a54.663 54.663 0 0 1 32.78-10.93h.89c8.48 0 16.85 1.97 24.43 5.77l14.72 7.36c3.68 1.84 7.93 2.14 11.83.84l47.31-15.77c6.33-2.11 10.6-8.03 10.6-14.7 0-8.56-6.94-15.5-15.5-15.5h-10.09c-4.11 0-8.05-1.63-10.96-4.54l-6.92-6.92a15.493 15.493 0 0 0-10.96-4.54H199.5c-8.56 0-15.5-6.94-15.5-15.5v-4.4c0-7.11 4.84-13.31 11.74-15.04l14.45-3.61c3.74-.94 7-3.23 9.14-6.44l8.08-12.11c2.87-4.31 7.71-6.9 12.89-6.9h24.21c8.56 0 15.5-6.94 15.5-15.5v-21.7C359.23 71.63 422.86 131.02 441.93 208H423.5c-8.56 0-15.5 6.94-15.5 15.5z"
                    />
                  </svg>
                  It Makes Everything Easier
                </div>

                {/* <p class="mb-6">
                  The year is {today.getFullYear()}. If your business doesn't already have a strong online presence, you are doing it wrong! What you are doing is the equivalent of driving a car with flat tyres. You are unwittingly sabotaging your own business. A strong online presence gives your business the following benefits:
                </p> */}
                <p class="text-gray-500">
                  It Makes It Easier For Your Business to Showcase Its Products and Services. It Makes It Easier For Customers to Find Your Business. It Makes It Easier To Strengthen Your Brand By Giving Your Business An Internet Identity Or 
                  {/* Personality. It Makes It Easier To Market Your Company’s Brand. It Makes It Easier For Your Business to Operate 24 Hours A Day, Seven Days A Week. As You Can Deduce, This Significantly Increases Your Business' Profit Margins. It Makes It Easier For Your Business To Build Relationships. It Makes It Easier To Extend The Reach Of Your Business. It is The First Step Towards Attaining A Global Business Status. It Provides Another Official Channel Of Communication To Reach Customers. A Channel With Global Reach. A Channel Which Never Sleeps. */}
                </p>
              </div>
            </div>

            <div class="flex flex-wrap lg:flex-column mb-12">
              <div class="grow-0 shrink-0 basis-auto w-full lg:w-12/12 lg:p-6 mb-6 lg:mb-0">
                <div
                  class="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg"
                  style={{ backgroundPosition: '50%' }}
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src="https://mdbootstrap.com/img/new/standard/city/033.jpg"
                    class="w-full"
                    alt="Louvre"
                  />
                  <NavLink to="/blog2">
                    <div
                      class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                      style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                    ></div>
                  </NavLink>
                </div>
              </div>

              <div class="grow-0 shrink-0 basis-auto w-full lg:w-12/12 lg:pr-6">
                <h3 class="text-2xl font-bold mt-4 mb-4">
                  Billion Dollar Companies Agree
                </h3>
                <div class="text-yellow-600 text-sm mb-4 flex items-center font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    class="w-4 h-4 mr-2"
                  >
                    {/* <!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --> */}
                    <path
                      fill="currentColor"
                      d="M608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32zM48 400v-64c35.35 0 64 28.65 64 64H48zm0-224v-64h64c0 35.35-28.65 64-64 64zm272 176c-44.19 0-80-42.99-80-96 0-53.02 35.82-96 80-96s80 42.98 80 96c0 53.03-35.83 96-80 96zm272 48h-64c0-35.35 28.65-64 64-64v64zm0-224c-35.35 0-64-28.65-64-64h64v64z"
                    />
                  </svg>
                  Join The Fourtune 500
                </div>
                <p class="text-gray-500">
                  Don't just take our word for it. One of the founders of
                  Microsoft, and its CEO for 25 years, once said:{' '}
                  <strong className="text-[#2c5282]">
                    “If your business is not on the Internet then your business
                    will be out of business.”
                  </strong>{' '}
                  To put that into perspective, today 
                  {/* Microsoft is a trillion
                  dollar company. If your ambition is for your business to be just as big -- or bigger -- taking his advice will serve as more than just taking a step in the right direction. Netflix grew by taking this route. They went from being your regular mom and pop's DVD rental shop to being the online streaming juggernaut it is today. Disney, HBO, etc. followed suit. Amazon gained its trillion dollar status through the power of the internet. Starting an ecommerce site broadened their reach beyond compare. In China, Alibaba has attained its peerless status the same way. */}
                </p>
              </div>
            </div>

            <div class="flex flex-wrap lg:flex-column mb-12">
              <div class="grow-0 shrink-0 basis-auto w-full lg:w-12/12 lg:p-6 mb-6 lg:mb-0">
                <div
                  class="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg"
                  style={{ backgroundPosition: '50%' }}
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src="https://mdbootstrap.com/img/new/standard/city/079.jpg"
                    class="w-full"
                    alt="Louvre"
                  />
                  <NavLink to="/blog3">
                    <div
                      class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                      style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                    ></div>
                  </NavLink>
                </div>
              </div>

              <div class="grow-0 shrink-0 basis-auto w-full lg:w-12/12 lg:pl-6">
                <h3 class="text-2xl font-bold mt-4 mb-4">How we Can Help You</h3>
                <div class="text-red-600 text-sm mb-4 flex items-center font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    class="w-4 h-4 mr-2"
                  >
                    {/* <!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --> */}
                    <path
                      fill="currentColor"
                      d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"
                    />
                  </svg>
                  Exhibit A
                </div>
                <p class="text-gray-500">
                  A strong online presence is more than just having a good social
                  media presence. You{' '}
                  <span className="text-[#2c5282] font-bold">need</span> a
                  beautiful, presentable, professionally made website which serves as your business' way to comunicate with the general public. If your website 
                  {/* looks good enough, and performs well enough, you will be drowning in a tsunami of new customers and new clients. That is where we come in! Are you still in doubt? Check{' '}
                  <span className="text-[#2c5282] font-bold">
                    <a href="#portfolio">this</a>
                  </span>{' '}
                  out: */}
                </p>
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

export default BloggingPage;
