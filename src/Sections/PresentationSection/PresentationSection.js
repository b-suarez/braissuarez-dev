import React, { Component } from "react";
import "./PresentationSection.css";
import { Grid } from "@mui/material";
import photo from "./images/caraicon2.jpg";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";

const theCopy = [
  "Hello traveler! My name is Brais and this is my interwebs corner.",
  "I am a Software Engineer with a bunch of Years of experience in Digital Media, with a Masters in Data Science" + 
  " and a Bachelor in Multimedia Engineering.",
  "As a professional, I have worked as a QA Tester, Project Manager, Data Scientist and Fullstack developer for companies" + 
  " of various sizes, mostly on the area of videogames and digital marketing. As you can see I am a curious person " +
  "by nature, I have tried multiple roles and love to learn new things.",
  "On a personal note, I am kind of a sports addict. I was a SpeedSkater for all my youth and lately you might find me " + 
  "playing football or padel whenever I can.",
];

class PresentationSection extends Component {
  render() {
    return (
      <div className="section-padding">
        {/* HERE WE DEFINE THE SECTION HEADER */}
        <SectionHeader sectionName="ABOUT ME" />

        {/* HERE WE DEFINE THE SECTION CONTENT */}
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          spacing={4}
        >
          {/* HERE WE DEFINE THE COPY */}
          <Grid item sm={8} xs={12}>
            {theCopy.map((theCopy) => (
              <p key={theCopy[0]} className="standard-text">{theCopy}</p>
            ))}
          </Grid>

          {/* HERE WE DEFINE THE IMAGE */}
          <Grid item sm={4} xs={12} className="profile-image-container">
            <img
              className="about-me-picture"
              src={photo}
              alt="Me, handsome eh?"
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default PresentationSection;
