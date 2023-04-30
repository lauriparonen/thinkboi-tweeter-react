import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

function ApiKeysForm(props) {
  const [apiKey, setApiKey] = useState('');
  const [apiSecretKey, setApiSecretKey] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [accessTokenSecret, setAccessTokenSecret] = useState('');

  const handleSave = () => {
    // Save the API keys
    props.onSave({
      apiKey: apiKey,
      apiSecretKey: apiSecretKey,
      accessToken: accessToken,
      accessTokenSecret: accessTokenSecret
    });
  };

  return (
    <form>
      <TextField
        label="API key"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
      />
      <TextField
        label="API secret key"
        value={apiSecretKey}
        onChange={(e) => setApiSecretKey(e.target.value)}
      />
      <TextField
        label="Access token"
        value={accessToken}
        onChange={(e) => setAccessToken(e.target.value)}
      />
      <TextField
        label="Access token secret"
        value={accessTokenSecret}
        onChange={(e) => setAccessTokenSecret(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSave}>Save</Button>
    </form>
  );
}

export default ApiKeysForm;
