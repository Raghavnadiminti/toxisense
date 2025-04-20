import Navbar from './components/Navbar';
import TextClassifier from './components/TextClassifier';
import About from './pages/About';
import Contact from './pages/Contact';
import DownloadButton from './components/DownloadButton';
import Hero from './components/Hero';
import Footer from './components/Footer';


function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020024] via-[#090979] to-[#00D4FF] main scroll-smooth">

      <Navbar />
      
      <main className="container mx-auto px-4 py-8 space-y-20">
        <section id="home" className="hgt scroll-offset">
          <Hero />
          <TextClassifier />
        </section>
        <section id="about" className="hgt scroll-offset">
          <About />
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
