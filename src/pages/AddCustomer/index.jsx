import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { PageTitle } from '../../Components';

const AddCustomer = () => {
  return (
    <Container component='main'>
      <Box
        sx={{
          // marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <PageTitle title='Add Customer' />
        <Typography> Add Customer </Typography>
      </Box>
    </Container>
  );
};

export default AddCustomer;
