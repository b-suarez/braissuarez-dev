import React, { Component } from "react";
import "./ProjectsNoAnimation.css";
import { Grid } from "@mui/material";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";

const projects = {
	"TECHNICAL SAVVY":
		"My hands-on experience at every stage of software development equips me to lead digital strategies and transformations. I can delve deep into any project aspect while maintaining a broad perspective.",

	"DIGITAL EXPERT":
		"Throughout my career, I've completed diverse projects from airport installations to barbecue software, including OTT and sports data platforms. This extensive experience has given me a comprehensive understanding of market offerings and achievable goals.",

	"JACK OF ALL TRADES":
		"Certified as a Google Cloud engineer and experienced as a Data Scientist, my background is rooted in game design and development. I've spent most of my career in managerial roles. This unique blend of technical skills and management expertise allows me to navigate any digital environment with confidence.",
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
							<Grid
								key={key}
								item
								xs={12}
								md={tabWidth}
								className="container-tab"
							>
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
