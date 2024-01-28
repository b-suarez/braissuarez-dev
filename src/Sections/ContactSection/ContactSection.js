import React, { Component } from "react";
import "./ContactSection.css";
import { Grid } from "@mui/material";

class ContactSection extends Component {
	render() {
		return (
			<div className="card-content card-contact">
				<a href="https://www.linkedin.com/in/brais-suarez-souto/">
					<img
						className="logo-contact"
						src={require("./images/linkdin.png")}
						alt="Link to my Linkedin account"
					/>
				</a>
				<a href="https://github.com/b-suarez">
					<img
						className="logo-contact"
						src={require("./images/github.png")}
						alt="Link to my github account"
					/>
				</a>
				<p className="standard-text">
					Want to get in touch? Feel free to drop me a message in Linkedin or
					send an email to <span>bsuarezsouto@gmail.com</span>
				</p>
			</div>
		);
	}
}

export default ContactSection;
