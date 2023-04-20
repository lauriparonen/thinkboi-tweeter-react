import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export const setIsDraftsModalOpen = () => {};

const DraftsModal = ({ open, onClose }) => {
  const classes = useStyles();
  const [drafts, setDrafts] = useState([]);
  const [currentDraft, setCurrentDraft] = useState('');

  useEffect(() => {
    const savedDrafts = JSON.parse(localStorage.getItem('drafts')) || [];
    setDrafts(savedDrafts);
  }, []);

  const handleSaveDraft = () => {
    setDrafts([...drafts, currentDraft]);
    setCurrentDraft('');
  };

  const handleDeleteDraft = (index) => {
    const newDrafts = [...drafts];
    newDrafts.splice(index, 1);
    setDrafts(newDrafts);
  };

  const handleClose = () => {
    onClose();
    setCurrentDraft('');
  };

  useEffect(() => {
    localStorage.setItem('drafts', JSON.stringify(drafts));
  }, [drafts]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      className={classes.modal}
      style={{ color: 'black',
      boxShadow: '5px 5px 5px 5px #000',
      padding: '2px 4px 3px', borderRadius: '10px', transition: 'all 1s ease-out !important', }}
    >
      <div className={classes.paper}>
        <h2>Drafts</h2>
        <TextField
          label="Draft"
          value={currentDraft}
          onChange={(e) => setCurrentDraft(e.target.value)}
          multiline
          fullWidth
          variant="outlined"
        />
        <Button onClick={handleSaveDraft}>Save Draft</Button>
        <Button onClick={handleClose}>Close</Button>
        <ul>
          {drafts.map((draft, index) => (
            <li key={index}>
              <span>{draft}</span>
              <Button onClick={() => setCurrentDraft(draft)}>Edit</Button>
              <Button onClick={() => handleDeleteDraft(index)}>Delete</Button>
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  );
};

export default DraftsModal;
