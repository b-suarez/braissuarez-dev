import React, { Component } from "react";
import "./HighlightsSection.css";
import { Grid } from "@mui/material";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import HighlightsCard from "../../Components/HighlightsCard/HighlightsCard";

const highlights = {
    'tokyo2020':'Super boring copy about this', 
    'rkt':'Super boring copy about this'
}

class HighlightsSection extends Component {
  render() {
    return (
      <div className="section-padding">
        {/* HERE WE DEFINE THE SECTION HEADER */}
        <SectionHeader sectionName="HIGHLIGHTS" />

        {/* HERE WE DEFINE THE SECTION CONTENT */}
        <Grid
          container
          direction="row"
          justifyContent="end"
          spacing={2}
        >
            {/* LOOP TO CREATE THE CARDS */}
            {Object.keys(highlights).map(key => {
                return (
                    <Grid item sm={3} xs={12} key={key}>
                        <HighlightsCard highlightName={key}/>
                    </Grid>
                );
            })}
        </Grid>
      </div>
    );
  }
}

export default HighlightsSection;
