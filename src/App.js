import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';
import Layout from './Layout';
import { Views } from './utils';

import { BrowserRouter } from 'react-router-dom';

const theme = createTheme();

function App() {
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
