import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Popper from '@mui/material/Popper';
import Paper from '@mui/material/Paper';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import { Dialog } from '@mui/material';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Dialog1 = ({ customerId, setRefreshTable, customerData }) => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate()
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setOpen(!open);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    handleClickAway()
    const token = localStorage.getItem("token");

    axios.delete(`http://146.190.164.174:4000/api/customer/delete_customer/${customerId}`, {
      headers: {
        'x-sh-auth': token
      }

    })

      .then(response => {
        console.log("delete Succesfull", response)
        setRefreshTable(pre => !pre)
      })
      .catch((error) => {
        console.error("error deleting user", error)
      })
  }


  const handleEdit = () => {
    handleClickAway()

    navigate("/editcustomer", { state: customerData })

  }
  return (
    <div>
      <IconButton onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Popper open={open} anchorEl={anchorEl} placement="bottom-start">
        <ClickAwayListener onClickAway={handleClickAway}>
          <Paper>
            <MenuItem onClick={handleEdit}>
              <Typography variant="inherit">Edit</Typography>
            </MenuItem>
            <MenuItem onClick={handleDelete}>
              <Typography
                variant="inherit"
              >Delete</Typography>
            </MenuItem>
            <MenuItem onClick={handleClickAway}>
              <Typography
                variant="inherit"

              >Health Status</Typography>
            </MenuItem>
          </Paper>
        </ClickAwayListener>
      </Popper>
    </div>
  );
};

Dialog1.propTypes = {

  customerId: PropTypes.string,
  setRefreshTable: PropTypes.func,
  customerData: PropTypes.object

};

export default Dialog1;
