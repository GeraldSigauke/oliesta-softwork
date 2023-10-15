import React from 'react';
import { IoIosArrowDropupCircle } from 'react-icons/io';

const GoToTheTopComponent = () => {
  return (
    <>
        <div className="fixed bottom-0 right-0 w-20 h-20 flex justify-center items-center">
            <a href='#top'>
                <IoIosArrowDropupCircle id='go-up' className="text-[#2c5282] w-10 h-10 bg-[#FFFFFF]" />
            </a>
        </div>
    </>
  )
}

export default GoToTheTopComponent