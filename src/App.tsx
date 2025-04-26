import Navbar from './components/Navbar';
import TextClassifier from './components/TextClassifier';
import About from './pages/About';
import Contact from './pages/Contact';
import DownloadButton from './components/DownloadButton';
import HowToUse from './pages/HowToUse';
import FAQ from './pages/FAQ';
import Hero from './components/Hero';
import Footer from './components/Footer';
import vdio from './assets/vid.mp4'


function App() {
  return (
    <div className="min-h-screen main scroll-smooth">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src={vdio} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 space-y-20">
          <section id="home" className="hgt scroll-offset">
            <Hero />
            <TextClassifier />
          </section>
          <section id="about" className="hgt scroll-offset">
            <About />
          </section>
          <section id="how-to-use" className="hgt scroll-offset">
            <HowToUse />
          </section>
          <section id="faq" className="hgt scroll-offset">
            <FAQ />
          </section>
          <section id="contact" className="hgt scroll-offset">
            <Contact />
          </section>
        </main>
      <DownloadButton />
      <Footer />
    </div>
  );
}

export default App;
