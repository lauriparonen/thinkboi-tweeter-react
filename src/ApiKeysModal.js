import React, { useState, useEffect } from 'react';
import { Modal, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ApiKeysForm from './ApiKeysForm';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '50%',
    margin: 'auto',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    textAlign: 'center',
    borderRadius: '3%',
  },
  text: {
    color: 'black',
  },
}));

function ApiKeysModal(props) {
  const { open, handleClose, handleSave } = props;
  const classes = useStyles();
  const [apiKeys, setApiKeys] = useState({
    apiKey: '',
    apiSecretKey: '',
    accessToken: '',
    accessTokenSecret: '',
  });

  useEffect(() => {
    const storedKeys = localStorage.getItem('apiKeys');
    if (storedKeys) {
      setApiKeys(JSON.parse(storedKeys));
    }
  }, []);

  const handleFormSave = (keys) => {
    localStorage.setItem('apiKeys', JSON.stringify(keys));
    setApiKeys(keys);
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <div className={classes.modal}>
        <div className={classes.paper}>
          <Typography variant="h6" className={classes.text}>
            API Keys
          </Typography>
          {apiKeys.apiKey && (
            <div>
              <Typography className={classes.text}>
                API Key: {apiKeys.apiKey}
              </Typography>
              <Typography className={classes.text}>
                API Secret Key: {apiKeys.apiSecretKey}
              </Typography>
              <Typography className={classes.text}>
                Access Token: {apiKeys.accessToken}
              </Typography>
              <Typography className={classes.text}>
                Access Token Secret: {apiKeys.accessTokenSecret}
              </Typography>
            </div>
          )}
          <ApiKeysForm onSave={handleFormSave} />
        </div>
      </div>
    </Modal>
  );
}

export default ApiKeysModal;
