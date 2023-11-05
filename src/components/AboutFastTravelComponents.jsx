import React from 'react';

const AboutFastTravelComponents = () => {
  return (
    <>
        <div id='aftc' className="fixed bottom-[45%] right-0 flex flex-col gap-3 m-5">
            <div id='ft-outer' className="w-4 h-4 flex justify-center items-center">
                <a href="#origin">
                    <div id='ft-inner' className="w-3 h-3"></div>
                </a>
            </div>
            <div id='ft-outer' className="w-4 h-4 flex justify-center items-center">
                <a href="#reasons">
                    <div id='ft-inner' className="w-3 h-3"></div>
                </a>
            </div>
        </div>
    </>
  )
}

export default AboutFastTravelComponents