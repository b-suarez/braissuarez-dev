import React, { Component } from 'react';
import './HighlightsCard.css'
import { Grid } from '@mui/material';

class HighlightsCard extends Component {
  render() {
    return (
      <div className="dark-bg card-highlight">  
        <div className='card-content'>
            <img
                className="card-picture"
                src={require('./images/' + this.props.highlightName + ".png")}
                alt="Me, handsome eh?"
            />
                <p className='card-copy standard-text'> a isd naos idnasoidn aoqoiwe qwoei nqwoeinqwoi enqwoie qweiqwn eoqwien oqwno iudsabdua aius biasud baisudsu a</p>
        </div>
      </div>
     
    );
  }
}

export default HighlightsCard;