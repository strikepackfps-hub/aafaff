import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import FeaturesShowcase from './components/FeaturesShowcase';
import AISection from './components/AISection';
import FeatureGrid from './components/FeatureGrid';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ background: '#1e1f22' }}>
      <Navbar />
      <Hero />
      <Marquee />
      <FeaturesShowcase />
      <AISection />
      <FeatureGrid />
      <CTA />
      <Footer />
    </div>
  );
}
