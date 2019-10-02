import React from 'react';
import axios from 'axios';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Radio from '../Components/Radio';
import Checkbox from '@material-ui/core/Checkbox';
// import Redirect from 'react-router';

class input extends React.Component {
  state = {
    id: this.props.location.state ? this.props.location.state.data._id : '',
    firstName: this.props.location.state
      ? this.props.location.state.data.firstName
      : '',
    lastName: this.props.location.state
      ? this.props.location.state.data.lastName
      : '',
    screenName: this.props.location.state
      ? this.props.location.state.data.screenName
      : '',
    phone: this.props.location.state
      ? this.props.location.state.data.phone
      : null,
    email: this.props.location.state
      ? this.props.location.state.data.email
      : '',
    dob: this.props.location.state ? this.props.location.state.data.dob : '',
    gender: this.props.location.state
      ? this.props.location.state.data.gender
      : '',
    country: this.props.location.state
      ? this.props.location.state.data.country
      : '',
    checked: this.props.location.state
      ? this.props.location.state.data.checked
      : '',
    checked: false,
    update: this.props.location.state ? this.props.location.state.update : false
  };

  checkChangeHandler = () => {
    this.setState({
      checked: !this.state.checked
    });
  };

  radioHandleChange = (input, value) => {
    this.setState({
      [input]: value
    });
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    console.log(name, ' ', value);
    this.setState({
      [name]: value
    });
  };

  submitForm = event => {
    event.preventDefault();
    const body = { ...this.state };
    if (!this.state.checked) {
      return;
    }
    axios
      .post('http://localhost:5000/forms', body)
      .then(result => {
        console.log(result);
        this.setState({
          redirect: true,
          id: result.data._id
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  updateForm = event => {
    event.preventDefault();
    const body = { ...this.state };
    if (!this.state.checked) {
      return;
    }
    axios
      .post('http://localhost:5000/forms', body)
      .then(result => {
        console.log(result.data);
        this.setState({
          redirect: true,
          id: result.data._id
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    if (this.state.redirect && !this.state.update) {
      return (
        <React.Fragment>
          <h1>Successfuly Posted</h1>
          <ul>
            <h1>Id : {this.state.id}</h1>
          </ul>
        </React.Fragment>
      );
    }
    if (this.state.redirect && this.state.update) {
      return (
        <React.Fragment>
          <h1>Successfuly Updated</h1>
          <ul>
            <h1>Id : {this.state.id}</h1>
          </ul>
        </React.Fragment>
      );
    }

    let btn = (
      <Button
        variant="contained"
        label="Submit"
        primary={true}
        style={styles.button}
        onClick={this.submitForm}
      >
        POST
      </Button>
    );
    if (this.state.update) {
      btn = (
        <Button
          variant="contained"
          label="Submit"
          primary={true}
          style={styles.button}
          onClick={this.updateForm}
        >
          UPDATE
        </Button>
      );
    }
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <br />
          <AppBar title="Enter User Details" />
          <TextField
            label="First Name"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleInputChange}
          />
          <br />
          <TextField
            label="Last Name"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleInputChange}
          />
          <br />
          <TextField
            label="Screen Name"
            name="screenName"
            value={this.state.screenName}
            onChange={this.handleInputChange}
          />
          <br />
          <TextField
            label="Email"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
          <br />
          <TextField
            label="country"
            name="country"
            value={this.state.country}
            onChange={this.handleInputChange}
          />
          <br />
          <TextField
            label="Phone"
            name="phone"
            value={this.state.phone}
            onChange={this.handleInputChange}
          />
          <br />
          <TextField
            label="DD/MM/YY"
            name="dob"
            value={this.state.dob}
            onChange={this.handleInputChange}
          />
          <br />
          <Radio handleChange={this.radioHandleChange} />
          <span>I accept(without checkbox form wont submit)</span>
          <Checkbox
            checked={this.state.checked}
            value={this.state.checked}
            onChange={this.checkChangeHandler}
            value="i accept"
            color="primary"
            inputProps={{
              'aria-label': 'secondary checkbox'
            }}
          />
          <br />
          {btn}
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default input;
