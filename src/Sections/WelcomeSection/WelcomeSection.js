import React, { Component } from "react";
import "./WelcomeSection.css";

class WelcomeSection extends Component {
  render() {
    return (
      <div className="full-height dark-bg">
        <div className="centered-item welcome-text">
          <p className="welcome-text-1">WELCOME</p>  
          <div className="contain-text green-bg" />
          <div className="contain-text orange-bg" />
          <div className="contain-text blue-bg" />
          <div className="contain-text welcome-text">
            <p className="welcome-text text-2">TO</p>
          </div>
          <div className="contain-text welcome-text">
            <p className="welcome-text text-3">MY</p>
          </div>
          <div className="contain-text welcome-text">
            <p className="welcome-text text-4">SITE!</p>
          </div>
        </div>
      </div>
    );
  }
}

export default WelcomeSection;
