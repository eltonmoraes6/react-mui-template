import { Typography } from '@mui/material';
import React from 'react';

function Copyright(props) {
  return (
    <>
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {'Copyright © '}
        {/* <Link to="https://mui.com/">Your Website</Link> */}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </>
  );
}

export default Copyright;
