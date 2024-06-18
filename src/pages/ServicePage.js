import Navbar from '../components/Navbar';
import LinearHundered from '../components/LinearHundered';
import OurServices from '../components/OurServices';
import WebDesign from '../components/WebDesign';
import GameDevelopment from '../components/GameDevelopment';
import ProjectManagement from '../components/ProjectManagement';
import StartProject from '../components/StartProject';
import Footer from '../components/Footer';

export default function ServicePage() {
    return (
      <div>
      <Navbar />
      <OurServices />
      <WebDesign />
      <LinearHundered />
      <GameDevelopment />
      <LinearHundered />
      <ProjectManagement />
      <StartProject />
      <Footer />
      </div>
    )
  }