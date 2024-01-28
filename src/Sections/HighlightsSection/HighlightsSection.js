import React, { Component } from "react";
import "./HighlightsSection.css";
import { Grid } from "@mui/material";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import HighlightsCard from "../../Components/HighlightsCard/HighlightsCard";

const highlights = {
    'tokyo2020':'I worked as Project Manager for the Digital Media team of both Tokyo 2020' 
    + 'and Beijing 2022 Olympic games, where I managed the team that delivered the sports data digital layouts.', 
    'rkt':'During the Pandemic lockdown I designed and developed my own game for Android,' + 
    'RKT: Hand Eye Coordination Challenged, which was highlighted as editors choice by the Google Team.',
    'euroleague':'Currently, I manage the roadmap or the Digital Ecosuystem at the Basketball Euroleague,' + 
    ' which includes, Games, apps, webs and activations.'
}

class HighlightsSection extends Component {
  render() {
    return (
      <div className="section-padding max-height">
        {/* HERE WE DEFINE THE SECTION HEADER */}
        <SectionHeader sectionName="HIGHLIGHTS" />

        {/* HERE WE DEFINE THE SECTION CONTENT */}
        <Grid
          container
          direction="row"
          justifyContent="end"
          spacing={2}
          className="max-height"
        >
            {/* LOOP TO CREATE THE CARDS */}
            {Object.keys(highlights).map(key => {
                return (
                    <Grid item sm={3} m={1} xs={12} key={key}>
                        <HighlightsCard highlightName={key} highlightDescription={highlights[key]}/>
                    </Grid>
                );
            })}
        </Grid>
      </div>
    );
  }
}

export default HighlightsSection;
