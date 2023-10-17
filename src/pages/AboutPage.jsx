import React from 'react';
import NavbarPadding from '../components/NavbarPadding';
import ContentComponent from '../components/ContentComponent';
import ReasonsComponent from '../components/ReasonsComponent';
import AboutFastTravelComponents from '../components/AboutFastTravelComponents';

const AboutPage = () => {
  return (
    <>
        <NavbarPadding />
        <div id="content" className=""></div>
        <ContentComponent />
        <ReasonsComponent />
        <AboutFastTravelComponents />
    </>
  )
}

export default AboutPage