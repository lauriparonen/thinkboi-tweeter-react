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
          This is a Twitter client that allows you to post tweets. <br />
          You can also manage your API keys and save drafts for later. <br />
          <br />
          Happy tweeting!
        </Typography>
      </div>
    </Modal>
  );
}

export default AboutModal;
