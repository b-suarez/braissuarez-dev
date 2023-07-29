import logo from './logo.svg';
import './App.css';
import WelcomeSection from './Sections/WelcomeSection/WelcomeSection'
import PresentationSection from './Sections/PresentationSection/PresentationSection'
import HighlightsSection from './Sections/HighlightsSection/HighlightsSection';

function App() {
  return (
    <div className="App">
      <WelcomeSection/>
      <PresentationSection/>
	  <HighlightsSection/>
    </div>
  );
}

export default App;
