import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Typography } from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

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
    borderRadius: '10px',
    transition: 'all 0.3s ease-out',
  },
}));

function InstructionsModal(props) {
  const classes = useStyles();

  return (
    <Modal
      className={classes.modal}
      open={props.open}
      onClose={props.onClose}
      BackdropComponent={Backdrop}
      BackdropProps={{
      timeout: 500,
      }}

    >
      
      <div className={classes.paper}>
        <Typography variant="h6">Instructions</Typography>
        <Typography variant="body1">
          To use this app, you need to set up your own Twitter API keys. <br />
          <br />
          1. Go to <a href="https://developer.twitter.com/en/portal/petition/essential/terms?plan=free" target="_blank" rel="noreferrer">https://developer.twitter.com/en/apply-for-access</a> <br />
          2. Follow the instructions and wait for Twitter to approve your application <br />
          3. Go to <a href="https://developer.twitter.com/en/portal/dashboard" target="_blank" rel="noreferrer">https://developer.twitter.com/en/portal/dashboard</a> <br />
          4. Click "Create an app" <br />
          5. Fill in the form and click "Create" <br />
          6. When you have created the app, click "Keys and tokens" <br />
          7. Copy the "API key" and "API secret key" <br />
          8. Click "Create" under "Access token & access token secret" <br />
        </Typography>
      </div>
      
    </Modal>
  );
}

export default InstructionsModal;
