import { useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/hero/Hero';
import IntroStrip from './components/sections/IntroStrip';
import ProjectsSection from './components/projects/ProjectsSection';
import AboutSection from './components/sections/AboutSection';
import StackSection from './components/sections/StackSection';
import ContactSection from './components/sections/ContactSection';
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
