import React from 'react';
import { images } from '../constants';

const ContentComponent = () => {
  const today = new Date();
  return (
    <>
      {/* <!-- Container for demo purpose --> */}
      <div id="content" class="container my-24 mx-auto md:px-6">
        {/* <!-- Section: Design Block --> */}
        <section class="mb-12">
          <div class="flex flex-wrap">
            <div class="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12">
              <div class="flex lg:py-12">
                <img src="https://images.pexels.com/photos/3182774/pexels-photo-3182774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='rounded-md' />
              </div>
            </div>

            <div class="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
              <div
                class="flex h-full items-center rounded-lg bg-[#2c5282] p-6 text-center text-white lg:pl-12 lg:text-left">
                <div class="lg:pl-12">
                  <h2 class="mb-8 text-3xl font-bold">Eat -> Sleep -> Code -> Repeat</h2>
                  <p class="mb-8 pb-2 lg:pb-0">
                The year is { today.getFullYear() }. If your business doesn't already have a strong online presence, you are doing it wrong! What you are doing is the equivalent of driving a car with flat tyres. You are unwittingly sabotaging your own business. Let us help you.
                  </p>

                  <div class="mx-auto mb-8 flex flex-col md:flex-row md:justify-around xl:justify-start">
                    <p class="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0 xl:mr-20">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" class="mr-2 h-5 w-5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Best team
                    </p>

                    <p class="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0 xl:mr-20">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" class="mr-2 h-5 w-5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Best quality
                    </p>

                    <p class="mx-auto mb-2 flex items-center md:mx-0 lg:mb-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" class="mr-2 h-5 w-5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Best experience
                    </p>
                  </div>

                  <p className=' text-[#ffffff]'>
                    <strong className=' text-[#FFFFFF]'>Vision</strong><br/>
                    To be the best software developing company in the world, known for building peerless masterpieces.
                  </p>
                  <p className=' text-[#ffffff]'>
                    <strong className=' text-[#FFFFFF]'>Mission</strong><br/>
                    To ensure that all clients get web apps and mobile apps which exceed their loftiest expectations.
                  </p>

                  <p className=' text-[#ffffff]'>
                  <strong className=' text-[#FFFFFF]'>Goals</strong><br/>
                    <ul class="list-disc list-inside mb-6">
                      <li>To treat (potential) clients in the most professional way possible.</li>
                      <li>To design apps which look even better than what the client envisions.</li>
                      <li>To build apps which have the best perfomance.</li>
                      <li>To build apps which never malfunction.</li>
                      <li>To build apps at a rate higher than the competition.</li>
                      <li>To always find ways to improve our coding pipeline.</li>
                      <li>To create and maintain a stress free work environment.</li>
                      <li>To create and grow loyalty in as many (potential) clients as possible.</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        <div id="reasons" className=""></div>
        </section>
        {/* <!-- Section: Design Block --> */}
      </div>
      {/* <!-- Container for demo purpose --> */}
    </>
  )
}

export default ContentComponent