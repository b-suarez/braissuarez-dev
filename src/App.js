import "./App.css";
// import WelcomeSection from "./Sections/WelcomeSection/WelcomeSection";
import PresentationSection from "./Sections/PresentationSection/PresentationSection";
import HighlightsSection from "./Sections/HighlightsSection/HighlightsSection";
import QuoteSection from "./Sections/QuoteSection/QuoteSection";
import CompaniesCarousel from "./Sections/CompaniesCarousel/CompaniesCarousel";
import WelcomeSection from "./Sections/WelcomeSection/WelcomeSection";
import ContactSection from "./Sections/ContactSection/ContactSection";
import ProjectsNoAnimation from "./Sections/ProjectsNoAnimation/ProjectsNoAnimation";
import PageHeader from "./Components/PageHeader/PageHeader";
import AnimatedCursor from "react-animated-cursor";
import Carousel from "./Components/Carousel/Carousel";

function App() {
	return (
		<div className="App">
			<AnimatedCursor
				innerSize={15}
				outerSize={35}
				innerScale={1}
				color="193, 11, 111"
				outerScale={2}
				outerAlpha={0}
				hasBlendMode={true}
				clickables={[
					"a",
					'input[type="text"]',
					'input[type="email"]',
					'input[type="number"]',
					'input[type="submit"]',
					'input[type="image"]',
					"label[for]",
					"select",
					"textarea",
					"button",
					".link",
					".dot",
				]}
				innerStyle={{
					backgroundColor: "#27291D",
				}}
				outerStyle={{
					border: "3px solid #27291D",
					mixBlendMode: "exclusion",
				}}
			/>
			<WelcomeSection />

			<PageHeader />
			<PresentationSection />
			<HighlightsSection />
			<Carousel />
			<QuoteSection />
			<CompaniesCarousel />
			<ProjectsNoAnimation />
			<ContactSection />
		</div>
	);
}

export default App;
