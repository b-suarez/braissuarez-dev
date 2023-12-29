import React, { Component } from "react";
import "./CompaniesCarousel.css";
import { Grid } from "@mui/material";

const highlights = {
	"old-spice": "Worked for old spice in their Lavender videogame",
	"red-bull": "Worked for old spice in their Lavender videogame",
	adidas: "Worked for old spice in their Lavender videogame",
	nike: "Worked for old spice in their Lavender videogame",
	oreo: "Worked for old spice in their Lavender videogame",
	riot: "Worked for old spice in their Lavender videogame",
	hp: "Worked for old spice in their Lavender videogame",
};

class CompaniesCarousel extends Component {
	render() {
		return (
			<div className="carousel">
				<div className="carousel1">
					<Grid
						container
						direction="row"
						justifyContent="end"
						spacing={2}
						className="max-height 120-width"
					>
						{/* LOOP TO CREATE THE CARDS */}
						{Object.keys(highlights).map((key) => {
							return (
								<Grid item xs={2} key={key}>
									<img
										className="carousel-picture"
										src={require("./images/" + key + ".png")}
										alt={highlights[key]}
										key={key}
									/>
								</Grid>
							);
						})}
					</Grid>
				</div>
				<div className="carousel2">
					<Grid
						container
						direction="row"
						justifyContent="end"
						spacing={2}
					
					>
						{/* LOOP TO CREATE THE CARDS */}
						{Object.keys(highlights).map((key) => {
							return (
								<Grid item xs={2} key={key}>
									<img
										className="carousel-picture"
										src={require("./images/" + key + ".png")}
										alt={highlights[key]}
										key={key}
									/>
								</Grid>
							);
						})}
					</Grid>
				</div>
			</div>
		);
	}
}

export default CompaniesCarousel;
