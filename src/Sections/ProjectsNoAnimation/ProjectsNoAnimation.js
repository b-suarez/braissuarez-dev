import React, { Component } from "react";
import "./ProjectsNoAnimation.css";
import { Grid } from "@mui/material";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";

const projects = {
	"Technical Translator":
		"My hands-on experience at every stage of software development equips me well to lead digital strategies " +
		"and transformations. This means I can dive deep into any aspect of a project while also seeing the big picture " +
		"from above.",
	"Digital Expert":
		"Throughout my career, I've completed a variety of projects ranging from airport installations to barbecue " +
		"software, and including OTT and sports data platforms. This diverse experience has provided me with a " +
		"comprehensive understanding of what the market offers and what's achievable.",
	"Master of None":
		"I hold certification as a Google Cloud engineer and have worked as a Data Scientist, though my " +
		"background is in game design and development. I've spent the majority of " +
		"my career in managerial roles. This unique blend of technical expertise and managerial experience " +
		"enables me to confidently navigate any digital environment.",
};

class ProjectsNoAnimation extends Component {
	render() {
		var tabWidth = 12 / Object.keys(projects).length;

		return (
			<div className="section-padding">
				<SectionHeader sectionName="EXPERTISE" />
				<Grid container direction="row" justifyContent="end">
					{/* LOOP TO CREATE THE CARDS */}
					{Object.keys(projects).map((key, index) => {
						return (
							<Grid item xs={12} md={tabWidth} className="container-tab">
								<Grid container direction="column" justifyContent="end">
									<Grid item xs={4}>
										<p className="project-number">{"0" + (index + 1)}</p>
									</Grid>
									<Grid item xs={4}>
										<p className="project-title">{key}</p>
									</Grid>
									<Grid item xs={4}>
										<p className="project-summary standard-text">
											{projects[key]}
										</p>
									</Grid>
								</Grid>
							</Grid>
						);
					})}
				</Grid>
			</div>
		);
	}
}

export default ProjectsNoAnimation;
