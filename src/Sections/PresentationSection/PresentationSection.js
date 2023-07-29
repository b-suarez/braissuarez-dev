import React, { Component } from "react";
import "./PresentationSection.css";
import { Grid } from "@mui/material";
import photo from "./images/profile.jpeg";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";

const theCopy = [
  "THEB EBRBERBEOAS KDOASDN AOWEAWLEKN LSKEN AQWIOE NWOEQNWE OWQKN SLSAKDN SALKDN WLQOWEINWONDSKDNLQKWEOQWIEQW NYN",
  "THEB EBRBERBEOAS KDOASDN AOWEAWLEKN LSKEN AQWIOE NWOEQNWE OWQKN SLSAKDN SALKDN WLQOWEINWONDSKDNLQKWEOQWIEQW NYN",
  "THEB EBRBERBEOAS KDOASDN AOWEAWLEKN LSKEN AQWIOE NWOEQNWE OWQKN SLSAKDN SALKDN WLQOWEINWONDSKDNLQKWEOQWIEQW NYN",
  "THEB EBRBERBEOAS KDOASDN AOWEAWLEKN LSKEN AQWIOE NWOEQNWE OWQKN SLSAKDN SALKDN WLQOWEINWONDSKDNLQKWEOQWIEQW NYN",
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
          spacing={2}
        >
          {/* HERE WE DEFINE THE COPY */}
          <Grid item sm={8} xs={12}>
            {theCopy.map((theCopy) => (
              <p className="standard-text">{theCopy}</p>
            ))}
          </Grid>

          {/* HERE WE DEFINE THE IMAGE */}
          <Grid item sm={4} xs={12}>
            <img
              className="about-me-picture"
              src={photo}
              alt="Me, handsome eh?"
            />
            ;
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default PresentationSection;
