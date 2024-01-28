import React, { Component } from "react";
import "./FAQ.css";
import { Grid, ButtonBase, Accordion } from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import SectionHeader from "../SectionHeader/SectionHeader";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const questions = {
	"What does a Technical Product Manager bring to my company?":
		"I worked as Project Manager for the Digital Media team of both Tokyo 2020" +
		"and Beijing 2022 Olympic games, where I managed the team that delivered the sports data digital layouts.",
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
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1-content"
						id="panel1-header"
					>
						<Typography>Accordion 1</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
							eget.
						</Typography>
					</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel2-content"
						id="panel2-header"
					>
						<Typography>Accordion 2</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
							eget.
						</Typography>
					</AccordionDetails>
				</Accordion>
			</div>
		);
	}
}

export default FAQ;
