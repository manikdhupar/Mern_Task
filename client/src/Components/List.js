import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

function SimpleList(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List>
        <ListItemText
          key={props.key}
          onClick={props.updateTodo}
          primary={
            <Typography
              variant="h6"
              style={{ fontSize: '32px', fontWeight: 'bold' }}
            >
              {props.data}
            </Typography>
          }
        />
      </List>
    </div>
  );
}

SimpleList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleList);
