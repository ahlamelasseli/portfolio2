
import AboutPage from './components/About';
import ContactPage from './components/contact';
import HeroSection from './components/Herosection';
import ProjectPage from './components/Projects';
import SkillsPage from './components/Skills';
import './index.css';
import Footer from './layout/Footer';
import Nav from './layout/Navbar';

function App() {
  return (
    <>
      {/* <Header/> */}
      <Nav/>
      <main>
        <HeroSection />
        <AboutPage/>
        <SkillsPage />
        <ProjectPage />
        <ContactPage />
      </main>
      <Footer />
    </>
  );
}

export default App;
