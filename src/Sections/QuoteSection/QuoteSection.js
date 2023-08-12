import React, { Component } from "react";
import "./QuoteSection.css";
import { Grid } from "@mui/material";

class QuoteSection extends Component {
  render() {
    return (
      <div className="section-padding quote-section">
        <Grid
          container
          direction="row"
          justifyContent="center"
          spacing={2}
        >
          <Grid item s={8} xs={10}>
           <p className="big-text">SOME OF THE <span className="strokeme">COMPANIES</span> I HAD THE PLEASURE TO WORK WITH</p>
          </Grid>
          
        </Grid>
      </div>
    );
  }
}

export default QuoteSection;
