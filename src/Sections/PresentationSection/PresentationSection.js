import React, { Component } from "react";
import "./PresentationSection.css";
import { Grid } from "@mui/material";
import photo from "./images/vinil-icon.png";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";

const theCopy = [
	"Greetings, wanderer! I am Brais, and you have stumbled upon my humble corner of the interwebs.",
	"As a seasoned Software Engineer, I bring forth many years of experience in the realm of Digital Media. My journey is fortified with a Master's in Data Science and a Bachelor's in Multimedia Engineering.",
	"Throughout my quest, I have donned various mantles: QA Tester, Project Manager, Data Scientist, and Fullstack Developer. My path has led me to collaborate with companies of diverse sizes, particularly within the enchanting domains of video games and digital marketing. Ever the curious soul, I relish in exploring new roles and acquiring new knowledge.",
	"Beyond the world of code, I am a devotee of sports. In my youth, I was a SpeedSkater, and in recent times, you may find me engaging in football or padel whenever the opportunity arises.",
	"And yes, I asked Chat GPT to write my intro based on Tolkien writing.",
];

class PresentationSection extends Component {
	render() {
		return (
			<div className="section-padding">
				{/* HERE WE DEFINE THE SECTION HEADER */}
				{/* <SectionHeader sectionName="ABOUT ME" /> */}

				{/* HERE WE DEFINE THE SECTION CONTENT */}
				<Grid
					container
					direction="row"
					justifyContent="space-between"
					spacing={4}
				>
					{/* HERE WE DEFINE THE COPY */}
					<Grid item sm={8} xs={12}>
						{theCopy.map((theCopy) => (
							<p key={theCopy[0]} className="standard-text">
								{theCopy}
							</p>
						))}
					</Grid>

					{/* HERE WE DEFINE THE IMAGE */}
					<Grid item sm={4} xs={12} className="profile-image-container">
						<img
							className="about-me-picture"
							src={photo}
							alt="Me, handsome eh?"
						/>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default PresentationSection;
