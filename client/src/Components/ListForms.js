import React from 'react';
import UI from '../Components/UI';
// import List from './List';

const classes = {
  width: '400px',
  margin: '0 auto'
};

const listForm = props => {
  return (
    <ul style={classes}>
      {props.forms && props.forms.length > 0 ? (
        props.forms.map(form => {
          return <UI update={props.update} key={form._id} data={form} />;
        })
      ) : (
        <h1>Empty, Create one.</h1>
      )}
    </ul>
  );
};

export default listForm;
