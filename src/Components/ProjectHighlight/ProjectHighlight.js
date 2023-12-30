import React, { Component } from "react";
import "./ProjectHighlight.css";
import { Grid, ButtonBase } from "@mui/material";

class ProjectHighlight extends Component {

	render() {
		return (
			<div>
				<p className="project-highlight-number">{"0" + this.props.projectNumber}</p>
			</div>
		);
	}
}

export default ProjectHighlight;
