import React from 'react';
import ContentComponent from '../components/ContentComponent';
import ReasonsComponent from '../components/ReasonsComponent';
import AboutFastTravelComponents from '../components/AboutFastTravelComponents';

const AboutPage = () => {
  return (
    <>
        {/* <NavbarPadding /> */}
        <div id="content" className=""></div>
        <ContentComponent />
        <ReasonsComponent />
        <AboutFastTravelComponents />
    </>
  )
}

export default AboutPage