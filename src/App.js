import logo from './logo.svg';
import './App.css';
import WelcomeSection from './Sections/WelcomeSection/WelcomeSection'
import PresentationSection from './Sections/PresentationSection/PresentationSection'
import HighlightsSection from './Sections/HighlightsSection/HighlightsSection';
import QuoteSection from './Sections/QuoteSection/QuoteSection';
import CompaniesCarousel from './Sections/CompaniesCarousel/CompaniesCarousel';
import ContactSection from './Sections/ContactSection/ContactSection';
import Projects from './Sections/Projects/Projects';

function App() {
  return (
    <div className="App">
      
      <WelcomeSection/>
      <PresentationSection/>
	    <Projects/>
      <QuoteSection/>
      <CompaniesCarousel/>
      <HighlightsSection/>
      
      <ContactSection/>
    </div>
  );
}

export default App;
