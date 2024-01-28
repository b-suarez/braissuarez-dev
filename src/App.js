import logo from './logo.svg';
import './App.css';
import WelcomeSection from './Sections/WelcomeSection/WelcomeSection'
import PresentationSection from './Sections/PresentationSection/PresentationSection'
import HighlightsSection from './Sections/HighlightsSection/HighlightsSection';
import QuoteSection from './Sections/QuoteSection/QuoteSection';
import CompaniesCarousel from './Sections/CompaniesCarousel/CompaniesCarousel';
import ContactSection from './Sections/ContactSection/ContactSection';
import Projects from './Sections/Projects/Projects';
import { Accordion } from '@mui/material';
import FAQ from './Components/FAQ/FAQ';
import ProjectsNoAnimation from './Sections/ProjectsNoAnimation/ProjectsNoAnimation';

function App() {
  return (
    <div className="App">
      
      <WelcomeSection/>
      <PresentationSection/>
      <HighlightsSection/>
	    
      <QuoteSection/>
      <CompaniesCarousel/>
      <ProjectsNoAnimation/>
      <FAQ/>
      <ContactSection/>
      
    </div>
  );
}

export default App;
