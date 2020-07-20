import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  //allow users ability to go back
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props; //returting the text values created in UserForm
    return (
      <MuiThemeProvider>
      <React.Fragment>
        <AppBar title="Enter Personal Details" />
        <TextField
        hintText="Enter Your Occupation"
        floatingLabelText="Occupation"
        onChange={handleChange('occupation')}
        defaultValue={values.occupation}
        />
        <br />
        <TextField
        hintText="Enter Your Current City"
        floatingLabelText="City Name"
        onChange={handleChange('city')}
        defaultValue={values.city}
        />
        <br />
        <TextField
        hintText="Enter A Bio"
        floatingLabelText="Bio"
        onChange={handleChange('bio')}
        defaultValue={values.bio}
        />
        <br />
        <RaisedButton
        label="Continue"
        primary={true}
        style={styles.button}
        onClick={this.continue}
        />
        <RaisedButton
        label="Back"
        primary={true}
        style={styles.button}
        onClick={this.back}
        />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

//button styles
const styles = {
  button: {
    margin: 17
  }
}

export default FormPersonalDetails;
