import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../Components/CustomButton';
// import classes from './Home.css';
// import Form from './Form';
// import InputForm from './Input';

const init = {};

const classes = {
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    padding: '15%'
  }
};

class Home extends React.Component {
  render() {
    const passingData = {
      data: {},
      update: false
    };
    return (
      <div style={classes.container}>
        <CustomButton path="/forms" passingData={{}} val="Fetch All Forms" />
        <CustomButton
          path="/forms/addForm"
          passingData={passingData}
          val="Add a Form"
        />
      </div>
    );
  }
}

export default Home;
