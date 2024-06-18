import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import LinearHundered from '../components/LinearHundered';
import OurServices from '../components/OurServices';
import Why100 from '../components/Why100';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function HomePage() {
    return (
      <div>
      <Navbar />
      <HeroSection />
      <LinearHundered />
      <OurServices />
      <Why100 />
      <FAQ />
      <LinearHundered />
      <Footer />
      </div>
    )
  }