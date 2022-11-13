import React from 'react';
import { ThemeProvider, createTheme, Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Singup from './pages/Singup';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import FormProduct from './pages/FormProduct';
import EditProduct from './components/EditProduct';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/singup" element={<Singup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/register" element={<FormProduct />} />
          <Route path="/product/edit/:id" element={<EditProduct />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
