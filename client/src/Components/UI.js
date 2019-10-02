// import React from 'react';
// // import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';

// // const useStyles = makeStyles(theme => ({
// //   root: {
// //     padding: theme.spacing(3, 2),
// //   },
// // }));

// const styles = {
//   root: {
//     padding: 20,
//     margin: 20
//   }
// };

// export default function PaperSheet(props) {
//   // const classes = useStyles();

//   return (
//     <div>
//       {/* <Paper style={styles.root}>
//         <Typography variant="h5" component="h3">
//           {props.data._id}
//         </Typography>
//         <Typography component="p">{props.data.firstName}</Typography>
//       </Paper>
//     </div> */}

//   );
// }

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import Paper from '@material-ui/core/Paper';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Card from '../Components/Card';
import StarBorder from '@material-ui/icons/StarBorder';

const classes = {
  root: {
    width: '100%',
    maxWidth: 360
  },
  nested: {
    paddingLeft: 30
  }
};

// const useStyles = makeStyles(theme => ({
//   root: {
//     width: '100%',
//     maxWidth: 360
//     // backgroundColor: theme.palette.background.paper,
//   },
//   nested: {
//     // paddingLeft: theme.spacing(4),
//   },
// }));

class NestedList extends React.Component {
  state = {
    open: false,
    updateFormDisplay: false
  };

  updateFormDisplayHandler = () => {
    // updateFormDisplay: true;
    //REDIRECT TO INPUT FORM FOR UPDATE
  };

  handleClick = () => {
    this.setState({
      open: !this.state.open
    });
  };

  render() {
    return (
      <Paper
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Nested List Items
          </ListSubheader>
        }
      >
        <ListItem button onClick={this.handleClick}>
          <ListItemIcon>
            <ChevronRightIcon />
          </ListItemIcon>
          <ListItemText primary={this.props.data._id} />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <Card update={this.updateFormDisplayHandler} data={this.props.data} />
        </Collapse>
      </Paper>
    );
  }
}

export default NestedList;
