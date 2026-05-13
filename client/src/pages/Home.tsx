import Hero from '@/components/sections/Hero';
import Experience from '@/components/sections/Experience';
import Education from '@/components/sections/Education';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import SpacePreview from '@/components/sections/SpacePreview';
import Contact from '@/components/sections/Contact';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <SpacePreview />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
