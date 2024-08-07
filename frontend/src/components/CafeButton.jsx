import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Tooltip, IconButton } from '@mui/material';

const CafeButton = (props) => {
  let location = props.page;
  if (!props.disabled) {
    location = props.location;
  }
  return (
    <>
      <Tooltip title="Cafe" arrow>
        <IconButton>
          <Link to={location} style={{ textDecoration: 'none' }}>
            <Button>
              {props.content}
            </Button>
          </Link>
        </IconButton>
      </Tooltip>
    </>
  );
}

export default CafeButton;