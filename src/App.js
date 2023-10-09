import { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavbarComponent from './components/NavbarComponent';
import Home from './pages/Home';
import About from './pages/About';
import AboutPage from './pages/AboutPage';
import Portfolio from './components/Portfolio';
import ProjectsPage from './pages/ProjectsPage';
import LandingPagesPage from './pages/LandingPagesPage';
import Pricing from './pages/Pricing';
import PricingPage from './pages/PricingPage';
import Testimonials from './pages/Testimonials';
import TestimonialsPage from './pages/TestimonialsPage';
import TrustedBy from './pages/TrustedBy';
import TrustedByPage from './pages/TrustedByPage';
import ContactUs from './pages/ContactUs';
import ContactPage from './pages/ContactPage';
import Footer from './pages/Footer';
import FooterComponent from './pages/FooterComponent';

import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import BloggingPage from './pages/BloggingPage';
import Blog1 from './components/Blog1';
import Blog2 from './components/Blog2';
import Blog3 from './components/Blog3';

// Dark and Light Theme Stuff:

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div id={theme}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Layout />}>
                <Route index element={<HomePage />}/>
                <Route path='about' element={<AboutPage />} />
                <Route path='/portfolio' element={<ProjectsPage />} />
                <Route path='/pricing' element={<PricingPage />} />
                <Route path='/testimonials' element={<TestimonialsPage />} />
                <Route path='/contactus' element={<ContactPage />} />
                <Route path='/blog' element={<BloggingPage />} />
                <Route path='/blog1' element={<Blog1 />} />
                <Route path='/blog2' element={<Blog2 />} />
                <Route path='/blog3' element={<Blog3 />} />
            </Route>              
            </Routes>
          </BrowserRouter>
          {/* <NavbarComponent />
          <Home />
          <HeroComponent />
          <About />
          <AboutPage />
          <Achievements />
          <Portfolio />
          <ProjectsPage />
          <Pricing />
          <PricingPage />
          <Testimonials />
          <TestimonialsPage />
          <ContactUs />
          <ContactPage />
          <Footer />
          <FooterComponent /> */}
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
