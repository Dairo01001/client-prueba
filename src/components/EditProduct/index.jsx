import React, { useEffect, useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  TextField,
  Typography,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import Swal from 'sweetalert2';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getProductById, updateProduct } from '../../service/product';

function EditProduct() {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({
    image: '', title: '', description: '', price: 0, discountPercentage: 0, stock: 0,
  });

  useEffect(() => {
    if (!user) {
      Swal.fire('Error', 'Debes estar logueado para poder editar un producto', 'warning');
      navigate('/login');
    } else {
      getProductById(id).then((data) => {
        setProduct({ ...data });
      });
    }
  }, []);

  const handleOnChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (product.image && product.price && product.title) {
      updateProduct(product, user.token).then((data) => {
        Swal.fire('Success', 'Producto Modificado exitosamente', 'success');
        navigate(`/product/${data.id}`);
      }).catch((err) => {
        console.log(err.response.data.product);
        Swal.fire('Error!', err.response.data.msg, 'error');
      });
    } else {
      Swal.fire('Error', 'Te falta rellenar algunas opciones!', 'warning');
    }
  };

  return (
    <Box
      sx={{
        marginTop: '8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <AppRegistrationIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Editar Producto
      </Typography>
      <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleOnSubmit}>
        <TextField
          margin="normal"
          type="text"
          required
          fullWidth
          id="title"
          label="Titulo"
          name="title"
          autoFocus
          value={product.title}
          onChange={handleOnChange}
        />
        <TextField
          margin="normal"
          type="text"
          fullWidth
          id="description"
          label="Descripcion"
          name="description"
          autoFocus
          value={product.description}
          onChange={handleOnChange}
        />

        <TextField
          margin="normal"
          type="number"
          required
          fullWidth
          id="price"
          label="Precio"
          name="price"
          autoFocus
          value={product.price}
          onChange={handleOnChange}
        />
        <TextField
          margin="normal"
          type="number"
          required
          fullWidth
          id="discountPercentage"
          label="Descuento (%)"
          name="discountPercentage"
          autoFocus
          value={product.discountPercentage}
          onChange={handleOnChange}
        />

        <TextField
          margin="normal"
          type="number"
          required
          fullWidth
          id="stock"
          label="Cantidad"
          name="stock"
          autoFocus
          value={product.stock}
          onChange={handleOnChange}
        />
        <TextField
          margin="normal"
          type="text"
          required
          fullWidth
          id="image"
          label="Url Imagen"
          name="image"
          autoFocus
          value={product.image}
          onChange={handleOnChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          endIcon={<SendIcon />}
          sx={{ mt: 3, mb: 2 }}
        >
          Editar
        </Button>
      </Box>
    </Box>
  );
}

export default EditProduct;
