import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.text.primary,
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: '10px', // added border radius
    transition: 'all 1s ease-out !important', // added transition
    '-webkit-transition': 'all 1s ease-out !important', // added for Safari
  },
  '@global': {
    '.MuiBackdrop-root': {
      opacity: '0.5',
      transition: 'all 1s ease-out !important', // added transition
      '-webkit-transition': 'all 1s ease-out !important', // added for Safari
    },
  },
}));


function AboutModal(props) {
  const classes = useStyles();

  return (
    <Modal
      className={classes.modal}
      open={props.open}
      onClose={props.onClose}
    >
      <div className={classes.paper}>
        <Typography variant="h6">About thinkboi tweeter</Typography>
        <Typography variant="body1">
          This is a Twitter client that allows you to post tweets
          without opening the Twitter homepage. <br />
          You can also save drafts for later. <br />
          <br />
          View the Instructions-tab for more information on setting up your API keys. <br />
          <br />
          Happy tweeting!<br />
          <br />
          C 2023 Lauri Paronen
        </Typography>
      </div>
    </Modal>
  );
}

export default AboutModal;
