import React, { Component } from "react";
import "./Projects.css";
import { Grid, ButtonBase } from "@mui/material";
import ProjectTab from "../../Components/ProjectsTab/ProjectTab";
import ProjectHighlight from "../../Components/ProjectHighlight/ProjectHighlight";

const projects = {
	tokyo2020:
		"I worked as Project Manager for the Digital Media team of both Tokyo 2020" +
		"and Beijing 2022 Olympic games, where I managed the team that delivered the sports data digital layouts.",
	rkt:
		"During the Pandemic lockdown I designed and developed my own game for Android," +
		"RKT: Hand Eye Coordination Challenged, which was highlighted as editors choice by the Google Team.",
    2321:
		"I worked as Project Manager for the Digital Media team of both Tokyo 2020" +
		"and Beijing 2022 Olympic games, where I managed the team that delivered the sports data digital layouts.",
	rkt:
		"During the Pandemic lockdown I designed and developed my own game for Android," +
		"RKT: Hand Eye Coordination Challenged, which was highlighted as editors choice by the Google Team.",
};

class Projects extends Component{
    state = {
        selectedProjectTitle: "tokyo2020",
        selectedProjectNumber:1
    };

    updateSelectedProject = (newProjectTitle, newProjectNumber) => {
        // Update the name in the component's state
        this.setState({ selectedProject: newProjectTitle });
        this.setState({ selectedProjectNumber: newProjectNumber });
    };

	render() {        
        var tabWidth = 12 / Object.keys(projects).length;

		return (
			<div className="section-padding max-height">
				<Grid container direction="row" justifyContent="end">
					{/* LOOP TO CREATE THE CARDS */}
					{Object.keys(projects).map((key, index) => {
						return (
							<ProjectTab
                                sizeTab={tabWidth}
								projectNumber={index+1}
								projectTitle={key}
								projectSummary={projects[key]}
                                changeSelectedProject={this.updateSelectedProject}
							/>
						);
					})}
				</Grid>
                <ProjectHighlight projectNumber={this.state.selectedProjectNumber}/>
			</div>
		);
	}
}

export default Projects;
