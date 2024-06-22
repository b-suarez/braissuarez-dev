import "./App.css";
import WelcomeSection from "./Sections/WelcomeSection/WelcomeSection";
import PresentationSection from "./Sections/PresentationSection/PresentationSection";
import HighlightsSection from "./Sections/HighlightsSection/HighlightsSection";
import QuoteSection from "./Sections/QuoteSection/QuoteSection";
import CompaniesCarousel from "./Sections/CompaniesCarousel/CompaniesCarousel";
import ContactSection from "./Sections/ContactSection/ContactSection";
import ProjectsNoAnimation from "./Sections/ProjectsNoAnimation/ProjectsNoAnimation";
import PageHeader from "./Components/PageHeader/PageHeader";
import AnimatedCursor from "react-animated-cursor";

function App() {
	return (
		<div className="App">
			<AnimatedCursor
				innerSize={8}
				outerSize={35}
				innerScale={1}
				outerScale={2}
				outerAlpha={0}
				hasBlendMode={true}
				innerStyle={{
					backgroundColor: "#27291D;",
				}}
				outerStyle={{
					border: "3px solid #27291D",
				}}
			/>
			{/* <WelcomeSection/> */}
			<PageHeader />
			<PresentationSection />
			<HighlightsSection />

			<QuoteSection />
			<CompaniesCarousel />
			<ProjectsNoAnimation />

			<ContactSection />
		</div>
	);
}

export default App;
