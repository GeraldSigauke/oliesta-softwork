import React, { useState, useEffect, useRef } from 'react';
import { images } from '../constants';
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from 'react-icons/ai';

const carouselPictures = [
    images.one,
    images.two,
    images.three,
    images.four,
    images.five,
    images.six,
    images.seven,
    images.eight,
    images.nine,
    images.ten
];

let count = 0;
let carouselInterval;

const Carousel = () => {
  const [currentIndex, setCurrectIndex] = useState(0);

  const carouselRef = useRef();

  const removeAnimation = () => {
     carouselRef.current.classList.remove('fade-anim');
  };

  const startCarousel = () => {
    carouselInterval = setInterval(() => {
         handleOnNextClick();
     }, 5000);
  };

  useEffect(() => {
     carouselRef.current.addEventListener('animationend', removeAnimation);
     carouselRef.current.addEventListener('mouseenter', pauseCarousel);
     carouselRef.current.addEventListener('mouseleave', startCarousel);

     return () => {
        clearInterval(carouselInterval);
     };

  }, []);

  const pauseCarousel = () => {
    clearInterval(carouselInterval);
  }

  const handleOnNextClick = () => {
     count = (count + 1) % carouselPictures.length;
     setCurrectIndex(count);
     carouselRef.current.classList.add('fade-anim');
 };

  const handleOnPrevClick = () => {
     const picturesLength = carouselPictures.length;
     count = (currentIndex + picturesLength - 1) % picturesLength;
     setCurrectIndex(count);
     carouselRef.current.classList.add('fade-anim');
  };

return (
 <div id='carousel' ref={carouselRef} className='w-full select-none relative'>
 <div className='aspect-w-1366 aspect-h-768'>
     <img src={carouselPictures[currentIndex]} alt='pets' />
 </div>
     <div className='absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center'>
        <button
            className='bg-[#2c5282] text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition'
            onClick={handleOnPrevClick}
        ><AiOutlineVerticalRight size={30} /></button>
         <button
            className='bg-[#2c5282] text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition' onClick={handleOnNextClick}><AiOutlineVerticalLeft size={30} 
        /></button>
     </div>
 </div>
)
}

export default Carousel