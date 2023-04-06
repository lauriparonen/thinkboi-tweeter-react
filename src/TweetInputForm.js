import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: 'black !important', 
    '& > *': {
      marginBottom: theme.spacing(2),
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      padding: theme.spacing(4),
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      boxShadow: theme.shadows[4],
      borderRadius: theme.shape.borderRadius,
    },
    textField: {
      width: '100%',
    },
    Button: {
      width: '100%',
    },
  },
}));

function TweetInputForm() {
  const classes = useStyles();

  const [tweet, setTweet] = useState('');
  const [is140, setIs140] = useState(true);

  const handleTweetChange = (event) => {
    setTweet(event.target.value);
  };

  const handleToggleChange = (event) => {
    setIs140(event.target.checked);
  };

  const maxLength = is140 ? 140 : 280;

  return (
    <div className={classes.root}>
      <FormControlLabel
        control={
          <Switch
            checked={is140}
            onChange={handleToggleChange}
            name="tweet-length-toggle"
            color="primary"
          />
        }
        label={is140 ? '140 Characters' : '280 Characters'}
      />
      <form className={classes.form}>
        <TextField
          className={classes.textField}
          id="outlined-multiline-static"
        
          /* set the outline color to white */
          InputLabelProps={{ style: { color: 'white', fontStyle: 'italic' } }}
          label="Tweet" 
          multiline
          rows={8}
          variant="outlined"
          value={tweet}
          onChange={handleTweetChange}
          inputProps={{ maxLength: maxLength }}
          InputProps={{ style: { color: 'white' } }}
          helperText={`${tweet.length}/${maxLength}`}

        />
        
        <Button style={{backgroundColor: 'black', color: 'white'}}
        className={classes.button} variant="contained" color="primary">
          Send Tweet   
        </Button>
        <Button className={classes.button} variant="contained" color="grey">
          Save Draft
        </Button>
      </form>
    </div>
  );
}

export default TweetInputForm;
