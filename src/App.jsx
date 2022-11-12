import React from 'react';
import { ThemeProvider, createTheme, Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Singup from './pages/Singup';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/singup" element={<Singup />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
