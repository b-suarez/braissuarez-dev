import React, { Component } from 'react';
import './SectionHeader.css'
import { Grid } from '@mui/material';

class SectionHeader extends Component {
  render() {
    return (
        <Grid container>
            <Grid item xs={12}>
                <p className='section-header-text'>{this.props.sectionName}</p>
            </Grid>  
        </Grid>
    );
  }
}

export default SectionHeader;