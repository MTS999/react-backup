import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Popper from '@mui/material/Popper';
import Paper from '@mui/material/Paper';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import { Dialog } from '@mui/material';

const Dialog1 = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setOpen(!open);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton onClick={handleClick}>
        <AccountCircleIcon />
      </IconButton>
      <Popper open={open} anchorEl={anchorEl} placement="bottom-start">
        <ClickAwayListener onClickAway={handleClickAway}>
          <Paper>
            <MenuItem onClick={handleClickAway}>
              <Typography variant="inherit">Edit</Typography>
            </MenuItem>
            <MenuItem onClick={handleClickAway}>
              <Typography variant="inherit">Delete</Typography>
            </MenuItem>
          </Paper>
        </ClickAwayListener>
      </Popper>
    </div>
  );
};

export default Dialog1;
