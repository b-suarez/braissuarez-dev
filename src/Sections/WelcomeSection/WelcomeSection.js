import React, { Component } from "react";
import "./WelcomeSection.css";

class WelcomeSection extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasUserScrolled: false, // State to track if the user has scrolled
		};
	}

	componentDidMount() {
		// Add scroll event listener to detect if the user scrolls manually
		window.addEventListener("scroll", this.handleUserScroll);

		// Set a timeout to trigger the automatic scroll after 3 seconds
		this.scrollTimeout = setTimeout(() => {
			// Only trigger automatic scroll if the user hasn't scrolled manually
			if (!this.state.hasUserScrolled) {
				const nextSection = document.querySelector(".header-container");

				if (nextSection) {
					nextSection.scrollIntoView({ behavior: "smooth" });
				}
			}
		}, 3000); // 3 seconds
	}

	handleUserScroll = () => {
		// When the user scrolls, set hasUserScrolled to true
		this.setState({ hasUserScrolled: true });
	};
	render() {
		return (
			<div className="full-height dark-bg">
				<div className="centered-item welcome-text">
					<p className="welcome-text-1">WELCOME</p>
					<div className="contain-text green-bg" />
					<div className="contain-text orange-bg" />
					<div className="contain-text blue-bg" />
					<div className="contain-text welcome-text">
						<p className="welcome-text text-2">TO</p>
					</div>
					<div className="contain-text welcome-text">
						<p className="welcome-text text-3">MY</p>
					</div>
					<div className="contain-text welcome-text">
						<p className="welcome-text text-4">SITE!</p>
					</div>
				</div>
			</div>
		);
	}
}

export default WelcomeSection;
