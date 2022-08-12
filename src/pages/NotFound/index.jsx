import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { PageTitle } from '../../Components';
import { images } from '../../constants';

const NotFound = () => {
  return (
    <>
      <PageTitle title='404' />
      <Container component='main' maxWidth='xs'>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            align='center'
            color='textPrimary'
            variant='h1'
            style={{
              margin: '0px',
              fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
              fontWeight: 500,
              fontSize: '35px',
              lineHeight: 1.167,
              letterSpacing: '-0.24px',
              textAlign: 'center',
            }}
          >
            404: The page you are looking for isn’t here
          </Typography>
          <Typography align='center' color='textPrimary' variant='subtitle2'>
            You either tried some shady route or you came here by mistake.
            Whichever it is, try using the navigation
          </Typography>
          <Box textAlign='center'>
            <img
              alt='Under development'
              src={images.pageNotFound}
              marginTop={50}
              display='inline-block'
              maxWidth='100%'
              width={560}
            />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default NotFound;
