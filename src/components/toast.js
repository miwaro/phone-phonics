import React, { useState }from 'react';
import Button from '@material-ui/core/Button';
import AddBoxIcon from '@material-ui/icons/AddBox';

import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';





export default function SimpleSnackbar(props) {

  const [open, setOpen] = useState(false);

    const handleClick = (title) => {
        props.addTitle(title);
        setOpen(true);
      };
    

  const handleClose = (event, reason, title) => {
    if (reason === 'clickaway') {
      return;
    }
    console.log(title)
    setOpen(false);
  };

  return (
    <div>
      <AddBoxIcon onClick={() => handleClick(props.title)}>Remove Title</AddBoxIcon>
      <Snackbar
        className='snack-bar'
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'left'
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Added to Favorties Page"
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}