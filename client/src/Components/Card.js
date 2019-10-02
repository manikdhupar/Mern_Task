import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Containers/Input';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '../Components/Button';
import Typography from '@material-ui/core/Typography';

const classes = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

export default function SimpleCard(props) {
  const bull = <span style={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h6" component="h2">
          Id : {props.data._id}
        </Typography>
        <Typography variant="h6" component="h2">
          FirstName : {props.data.firstName}
        </Typography>
        <Typography variant="h6" component="h2">
          LastName : {props.data.lastName}
        </Typography>
        <Typography variant="h6" component="h2">
          ScreenName : {props.data.screenName}
        </Typography>
        <Typography variant="h6" component="h2">
          email : {props.data.email}
        </Typography>
        <Typography variant="h6" component="h2">
          phone : {props.data.phone}
        </Typography>
        <Typography variant="h6" component="h2">
          dob : {props.data.dob}
        </Typography>
        <Typography variant="h6" component="h2">
          country : {props.data.country}
        </Typography>
        <Button
          update={props.update}
          path="/forms/addForm"
          data={props.data}
          val="Update Form"
        />
      </CardContent>
    </Card>
  );
}
