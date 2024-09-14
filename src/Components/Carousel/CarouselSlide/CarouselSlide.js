import React from "react";
import "./CarouselSlide.css";
import { Grid } from "@mui/material";

const CarouselSlide = ({ slide }) => {
	const { image, title, summary, tech, role, url, cta } = slide;

	return (
		<Grid container className="slide-background">
			<Grid item xs={12} sm={4} className="slide-image">
				<img
					className="slide-image"
					src={require("./images/" + image)}
					alt={`Slide ${title}`}
				/>
			</Grid>
			<Grid item xs={12} sm className="slide-content">
				<p className="slide-section-title headline">
					<span>PROJECT: </span>
					<span>{title}</span>
				</p>
				<p className="standard-text">
					<span className="title">SUMMARY: </span>
					<span className="description">{summary}</span>
				</p>
				<p className="standard-text">
					<span className="title">TECH: </span>
					<span className="description">{tech}</span>
				</p>
				<p className="standard-text">
					<span className="title">ROLE: </span>
					<span className="description">{role}</span>
				</p>
				<a href={url} className="slide-cta">
					{cta}
				</a>
			</Grid>
		</Grid>
	);
};

export default CarouselSlide;
