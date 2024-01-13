import React, { Component } from "react";
import "./ProjectTab.css";
import { Grid, ButtonBase } from "@mui/material";

class ProjectTab extends Component {

    sendProjectClicked = (title, number, summary, event) => {
        this.props.changeSelectedProject(title, number, summary);
    };

	render() {
		return (
			<Grid item xs={this.props.mobileSizeTab} md={this.props.sizeTab} className="container-tab">
				<ButtonBase onClick={(e) => this.sendProjectClicked(this.props.projectTitle, this.props.projectNumber,  this.props.projectSummary)}>
					<Grid container direction="column" justifyContent="end">
						<Grid item xs={4}>
							<p className="project-number">{"0" + this.props.projectNumber}</p>
						</Grid>
						<Grid item xs={4}>
							<p className="project-title">{this.props.projectTitle}</p>
						</Grid>
						<Grid item xs={4}>
							<p className="project-summary standard-text">{this.props.projectSummary}</p>
						</Grid>
					</Grid>
				</ButtonBase>
			</Grid>
		);
	}
}

export default ProjectTab;
