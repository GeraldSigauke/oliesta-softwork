import React from 'react';
import LandingPage from '../components/LandingPage';
import { lps } from '../data';

const LandingPagesPage = () => {
  return (
    <>
      {/* <!-- Container for demo purpose --> */}
      <div class="container my-24 px-6 mx-auto">

        {/* <!-- Section: Design Block --> */}
        <section class="mb-32 text-gray-800 text-center">

          <h2 class="text-3xl font-bold mb-1 pb-4 text-center">Projects we are <u class="text-[#2c5282]">proud</u> of</h2>

          <h3 class="text-2xl font-bold text-center mb-12">Landing Pages:</h3>

          <div class="grid lg:grid-cols-3 gap-6 xl:gap-x-12">
            
            {lps.map(lp => (
              <LandingPage key={lp.id} lp={lp} />
            ))}

          </div>

        </section>
        {/* <!-- Section: Design Block --> */}

      </div>
      {/* <!-- Container for demo purpose --> */}
    </>
  );
};

export default LandingPagesPage;
