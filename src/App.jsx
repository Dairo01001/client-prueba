import React from 'react';
import { ThemeProvider, createTheme, Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Singup from './pages/Singup';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/singup" element={<Singup />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
