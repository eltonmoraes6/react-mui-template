import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';

import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { CircularIndeterminate, PageTitle } from '../../Components';
import { login } from '../../redux/actions/userActions';

export default function SignIn() {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, errors } = userLogin;

  // Initialize a boolean state
  const [passwordShown, setPasswordShown] = useState(false);

  // Password toggle handler
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

  return (
    <Container component='main' maxWidth='xs'>
      <PageTitle title='Sign In' />
      <CssBaseline />

      {loading && <CircularIndeterminate />}
      {errors && (
        <Typography style={{ color: 'red' }}>
          New error: {errors.message}
        </Typography>
      )}

      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email('Must be a valid email')
            .max(255)
            .required('Email is required'),
          password: Yup.string().max(255).required('Password is required'),
        })}
        onSubmit={(values) => {
          dispatch(login(values.email, values.password));
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
          isValid,
          dirty,
        }) => (
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
              Sign in
            </Typography>
            <Box
              component='form'
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin='normal'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                autoFocus
                error={Boolean(touched.email && errors.email)}
                helperText={touched.email && errors.email}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
              />
              <TextField
                margin='normal'
                required
                fullWidth
                name='password'
                label='Password'
                id='password'
                autoComplete='current-password'
                error={Boolean(touched.password && errors.password)}
                helperText={touched.password && errors.password}
                onBlur={handleBlur}
                onChange={handleChange}
                type={passwordShown ? 'text' : 'password'}
                value={values.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton onClick={togglePassword}>
                        {passwordShown ? (
                          <Visibility style={{ fill: '#0072ea' }} />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <FormControlLabel
                control={<Checkbox value='remember' color='primary' />}
                label='Remember me'
              />
              <Button
                type='submit'
                disabled={!isValid && dirty}
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link to='/forgot-password' variant='body2'>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to='/register' variant='body2'>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        )}
      </Formik>
    </Container>
  );
}
