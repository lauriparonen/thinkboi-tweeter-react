
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AboutModal from './AboutModal';
import InstructionsModal from './InstructionsModal';
import DraftsModal from './DraftsModal';
import ApiKeysModal from './ApiKeysModal';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function MenuBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const [instructionsModalOpen, setInstructionsModalOpen] = useState(false);
  const [draftsModalOpen, setDraftsModalOpen] = useState(false);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenAboutModal = () => {
    setAboutModalOpen(true);
    handleClose();
  };

  const handleCloseAboutModal = () => {
    setAboutModalOpen(false);
  };

  const handleOpenInstructionsModal = () => {
    setInstructionsModalOpen(true);
    handleClose();
  };

  const handleCloseInstructionsModal = () => {
    setInstructionsModalOpen(false);
  };

  const handleOpenDraftsModal = () => {
    setDraftsModalOpen(true);
    handleClose();
  };

const handleCloseApiKeysModal = () => {
  setApiKeysModalOpen(false);
};


  const [apiKeysModalOpen, setApiKeysModalOpen] = useState(false);

  const handleOpenApiKeysModal = () => {
    setApiKeysModalOpen(true);
    handleClose();
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleOpenApiKeysModal}>API Keys</MenuItem>
            <MenuItem onClick={() => {handleClose(); handleOpenDraftsModal()}}>Drafts</MenuItem>
            <MenuItem onClick={handleOpenInstructionsModal}>Instructions</MenuItem>
            <MenuItem onClick={handleOpenAboutModal}>About</MenuItem>
          </Menu>
          <Typography variant="h6" className={classes.title}>
            thinkboi tweeter
          </Typography>
        </Toolbar>
      </AppBar>
      <AboutModal
        open={aboutModalOpen}
        onClose={handleCloseAboutModal}
      />
      <InstructionsModal
        open={instructionsModalOpen}
        onClose={handleCloseInstructionsModal}
      />
      <DraftsModal
        open={draftsModalOpen}
        onClose={() => {setDraftsModalOpen(false)}}
      />
      <ApiKeysModal
      open={apiKeysModalOpen}
      handleClose={handleCloseApiKeysModal}
      onClose={() => {setApiKeysModalOpen(false)}}
      />
      
    </div>
  );
}

export default MenuBar;

