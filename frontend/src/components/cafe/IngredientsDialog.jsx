import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import CollectableIngredients from './CollectableIngredients';
import { Input, Tooltip, IconButton } from '@mui/material';

import arrow from '../../assets/outside_arrow.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// for cool transitions
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const IngredientsDialog = (props) => {
  const [numsteps, setNumSteps] = useState(20);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let location = props.page;
  if (!props.disabled) {
    location = props.location;
  }

  return (
    <>
      <Tooltip title="Ingredients Run" arrow>
        <IconButton>
          <Link to="/ingredients-run" style={{ textDecoration: 'none' }}>
            <Button variant='text' onClick={handleClickOpen}>
              <img src={arrow} width="120px"></img>
            </Button>
          </Link>
        </IconButton>
      </Tooltip>

      <Dialog
        maxWidth="xs"
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Ingredients"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            You have this many steps/currency: {numsteps} steps
          </DialogContentText>
          <CollectableIngredients></CollectableIngredients>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Collect!</Button> {/* make sure it is disabled first */}
        </DialogActions>
      </Dialog>
    </>
  );
}

export default IngredientsDialog;