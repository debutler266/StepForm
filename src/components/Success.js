import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    //Send Data to API/Backend for real app
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <MuiThemeProvider>
      <React.Fragment>
        <AppBar title="Success!" />
        <h1>Thank You for Your Submission!</h1>
        <p>You will recieve an email confirmation</p>
      </React.Fragment>
      </MuiThemeProvider>
    );
  }
}


export default Success;
