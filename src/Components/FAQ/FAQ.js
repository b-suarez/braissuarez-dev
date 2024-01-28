import React, { Component } from "react";
import "./FAQ.css";
import { Accordion } from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import SectionHeader from "../SectionHeader/SectionHeader";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const questions = {
	"What does a Technical Product Manager bring to my company?":
	"A Technical Product Manager (TPM) brings a blend of technical expertise and strategic vision to drive product " + 
	"development aligned with company goals. They serve as a bridge between stakeholders, prioritizing features based " + 
	"on market needs and technical feasibility. TPMs facilitate cross-functional collaboration, ensuring smooth " + 
	"communication between engineering, design, and marketing teams. They mitigate risks, make data-driven decisions, "+
	"and advocate for the customer to deliver high-value products. From product vision to launch, TPMs play a key role " +
	"in driving innovation and success in technology-driven companies.",
	2:
		"During the Pandemic lockdown I designed and developed my own game for Android," +
		"RKT: Hand Eye Coordination Challenged, which was highlighted as editors choice by the Google Team.",
	3:
		"I worked as Project Manager for the Digital Media team of both Tokyo 2020" +
		"and Beijing 2022 Olympic games, where I managed the team that delivered the sports data digital layouts.",
	4:
		"During the Pandemic lockdown I designed and developed my own game for Android," +
		"RKT: Hand Eye Coordination Challenged, which was highlighted as editors choice by the Google Team.",
};

class FAQ extends Component {
	render() {
		return (
			<div className="section-padding">
				<SectionHeader sectionName="FAQs" />
				{Object.keys(questions).map((key, index) => {
					return (
						<Accordion>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel1-content"
								id="panel1-header"
							>
								<Typography>{key}</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography>
									{questions[key]}
								</Typography>
							</AccordionDetails>
						</Accordion>
					);
				})}
				
			</div>
		);
	}
}

export default FAQ;
