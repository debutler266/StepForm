import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';


export class UserForm extends Component {
state = {
  step: 1,
  firstName: '',
  lastName: '',
  email: '',
  occupation: '',
  city: '',
  bio: ''
};

//Proceed to the next step, taking step out of the state
nextStep = () => { //arroy function
  const { step } = this.state; // destructuing
  this.setState({
    step: step + 1
  });
}

//Proceed to the next step, taking step out of the state
prevStep = () => {
  const { step } = this.state; // destructuing, taking step out of state by pulling it out.
  this.setState({
    step: step - 1 // -1 because we are going back to previous
  });
}

//Handle fields change when email is entered
handleChange = input => e => {
  this.setState({[input]: e.target.value});
};

  render() {
    //pull step out of state destructuing
    const { step } = this.state;
    const { firstName, lastName, email, occupation, city, bio }
    = this.state;
    const values = { firstName, lastName, email, occupation, city, bio };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
          nextStep={this.nextStep} //props
          handleChange={this.handleChange} //props
          values={values} //props
          />
        );
        case 2:
        return (
          <FormPersonalDetails
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          values={values}
          />
        );
        case 3:
        return (
          <Confirm
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          values={values}
          />
        );
        case 4:
        return <Success />;
    }
  }
}

export default UserForm;
