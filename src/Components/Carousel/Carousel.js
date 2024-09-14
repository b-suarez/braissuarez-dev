import React, { useState, useRef, useEffect, useCallback } from "react";
import "./Carousel.css";
// Import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CarouselSlide from "./CarouselSlide/CarouselSlide";
import SectionHeader from "../SectionHeader/SectionHeader";

const CarouselDots = ({ dots, selectedDot, onDotClick }) => {
	return (
		<div className="carousel-dots">
			{dots.map((_, index) => (
				<div
					key={index}
					className={`dot ${selectedDot === index ? "selected" : ""}`}
					onClick={() => onDotClick(index)}
				></div>
			))}
		</div>
	);
};

const Carousel = () => {
	const [selectedDot, setSelectedDot] = useState(0);
	const swiperRef = useRef(null);

	const handleDotClick = useCallback((index) => {
		setSelectedDot(index);
		if (swiperRef.current) {
			swiperRef.current.slideTo(index);
		}
	}, []);

	useEffect(() => {
		if (swiperRef.current) {
			const handleSlideChange = () => {
				setSelectedDot(swiperRef.current.activeIndex);
			};
			swiperRef.current.on("slideChange", handleSlideChange);
			return () => {
				swiperRef.current.off("slideChange", handleSlideChange);
			};
		}
	}, []);

	const slides = [
		{
			image: "old-spice.png",
			title: "Old Spice: Big Lavender Game",
			summary:
				"How do you get fellas excited about lavender Old Spice body wash? With an over-the-top, 1st-person energy blaster game. Including beautifully crafted animated cutscenes and a gripping storyline, the game challenges you to track lavender in 3 levels to help Old Spice fill up their body wash bottles.",
			role: "QA Tester",
			tech: "HTML5, CSS, WebGL",
			cta: "Learn More",
			url: "https://www.awwwards.com/sites/big-lavender-game",
		},
		{
			image: "fantasy-challenge.png",
			title: "EuroLeague Fantasy Challenge",
			summary:
				"In my journey with EuroLeague Basketball, I was a key part of the team tasked with expanding its digital reach. As a leader of multiple projects, I spearheaded efforts that resulted in a remarkable 30% growth in the addressable marketing database. This endeavor not only broadened the league's digital footprint but also significantly enhanced our audience engagement and marketing capabilities.",
			role: "Digital Ecosystem Manager",
			tech: "Project Manager, Digital Growth Strategy",
			cta: "Press Release",
			url: "https://www.awwwards.com/sites/big-lavender-game",
		},
		{
			image: "mdlz-propensity.png",
			title: "MDLZ Purchase propensity models",
			summary:
				"During my tenure as a Data Scientist, I played a pivotal role in a team tasked with developing a purchase propensity model for Mondelez. This sophisticated model was designed to predict a user's likelihood to buy a product based on their choices throughout the purchase funnel. Our efforts significantly enhanced Mondelez's ability to tailor marketing strategies and optimize the customer journey.",
			role: "Data Scientist",
			tech: "Python, GCP, Teras",
			cta: "Case Study",
			url: "https://media.monks.com/case-studies/mondelez-data-and-measurement",
		},
		{
			image: "digitale-nach.png",
			title: "Digitale-Nachbarschaft",
			summary:
				"In my role as a Fullstack Developer, I took the lead in designing and developing Digitale Nachbarschaft, a website dedicated to educating German youth about the dangers of the internet. This project was particularly enriching, as it marked my first professional venture and allowed me to make a meaningful impact on digital safety awareness.",
			role: "Fullstack Developer",
			tech: "HTML5, CSS, Boostrap",
			cta: "TAKE ME THERE",
			url: "https://www.digitale-nachbarschaft.de/",
		},
	];

	return (
		<div className="section-padding">
			<SectionHeader sectionName="PROJECTS" />
			<CarouselDots
				dots={slides}
				selectedDot={selectedDot}
				onDotClick={handleDotClick}
			/>
			<Swiper
				ref={swiperRef}
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={20}
				slidesPerView={1}
				onSwiper={(swiper) => {
					swiperRef.current = swiper;
				}}
			>
				{slides.map((slide, index) => (
					<SwiperSlide key={index}>
						<div className="slide-container">
							<CarouselSlide slide={slide} text={index} />
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Carousel;
