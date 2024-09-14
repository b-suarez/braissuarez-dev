import React, { Component } from "react";
import "./HighlightsSection.css";
import { Grid } from "@mui/material";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import HighlightsCard from "../../Components/HighlightsCard/HighlightsCard";

const highlights = {
	mediamonks:
		"At MediaMonks, I spent nearly five years evolving from QA to Project Manager and Data Scientist, serving top clients at the world’s largest digital agency.",

	tokyo2020:
		"I managed the Digital Media team for the Tokyo 2020 and Beijing 2022 Olympics, overseeing the creation of sports data digital layouts.",

	euroleague:
		"I currently manage the digital roadmap for the Basketball Euroleague, including games, apps, websites, and activations.",
};

class HighlightsSection extends Component {
	render() {
		return (
			<div className="section-padding max-height">
				{/* HERE WE DEFINE THE SECTION HEADER */}
				<SectionHeader sectionName="CAREER" />

				{/* HERE WE DEFINE THE SECTION CONTENT */}
				<Grid
					container
					direction="row"
					justifyContent="end"
					spacing={2}
					className="max-height"
				>
					{/* LOOP TO CREATE THE CARDS */}
					{Object.keys(highlights).map((key) => {
						return (
							<Grid item sm={3} m={1} xs={12} key={key}>
								<HighlightsCard
									highlightName={key}
									highlightDescription={highlights[key]}
								/>
							</Grid>
						);
					})}
				</Grid>
			</div>
		);
	}
}

export default HighlightsSection;
