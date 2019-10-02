import React from 'react';
import Form from './Containers/Form';
import InputForm from './Containers/Input';
import Navbar from './Components/Navbar';
import Error from './Components/Error';
import Home from './Containers/Home';
// import Button from './Components/Button';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

const init = {};

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar val={'AxDrafT'} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/forms" component={Form} />
            <Route exact path="/forms/addForm" component={InputForm} />
            {/* <Route
              path="/forms/addForm"
              render={() => <InputForm {...this.props} />}
            /> */}
            <Route path="/" component={Error} />
          </Switch>
          {/* <Form /> */}
          {/* <InputForm data={init} /> */}
          {/* <Button val={'Get Forms'} />
        <Button val={'Add Form'} /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
