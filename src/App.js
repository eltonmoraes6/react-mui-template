import jwtDecode from 'jwt-decode';
import React, { useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';
import Layout from './Layout';
import { Views } from './utils';

import { setCurrentUser } from './redux/actions/userActions';
import store from './redux/store';
import { BrowserRouter, Navigate } from 'react-router-dom';

const theme = createTheme();

function App() {
  useEffect(() => {
    const data = localStorage.getItem('accessToken');
    if (data) {
      // Decode Auth Token and Get User Info and Exp
      const decoded = jwtDecode(data);
      //Set User and isAuthenticated
      store.dispatch(setCurrentUser(decoded));
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Views />
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
