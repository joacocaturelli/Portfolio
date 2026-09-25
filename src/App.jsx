import { useEffect } from 'react';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Hero from './components/hero/Hero/Hero';
import IntroStrip from './components/sections/IntroStrip/IntroStrip';
import ProjectsSection from './components/projects/ProjectsSection/ProjectsSection';
import AboutSection from './components/sections/AboutSection/AboutSection';
import StackSection from './components/sections/StackSection/StackSection';
import ContactSection from './components/sections/ContactSection/ContactSection';
import createFavicon from './utils/createFavicon';

export default function App() {
  useEffect(() => {
    document.fonts?.load('700 36px "Space Grotesk"').then(createFavicon);
  }, []);

  return (
    <>
      <Header />

      <main id="top">
        <Hero />
        <IntroStrip />
        <ProjectsSection />
        <AboutSection />
        <StackSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
