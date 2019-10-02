import React from 'react';
import axios from 'axios';
import ListForm from '../Components/ListForms';

class form extends React.Component {
  state = {
    forms: []
  };

  componentDidMount() {
    this.getForms();
  }

  getForms = () => {
    axios
      .get('http://localhost:5000/forms')
      .then(result => {
        console.log(result.data);
        if (result.data) {
          this.setState({
            forms: result.data
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  updateForm = () => {};

  render() {
    return (
      <div>
        <h3>Click Form to update</h3>
        <ListForm update={this.updateHandler} forms={this.state.forms} />
      </div>
    );
  }
}

export default form;
