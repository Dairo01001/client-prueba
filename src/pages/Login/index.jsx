import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Avatar,
  Box,
  Button,
  CssBaseline,
  TextField,
  Typography,
  Grid,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { login } from '../../service/user';
import { addUser } from '../../redux/reducer/userSlice';
import { getAllProducts } from '../../service/product';
import { addAllProducts } from '../../redux/reducer/productSlice';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (input.email && input.password) {
      login(input).then((user) => {
        dispatch(addUser(user));
        getAllProducts().then((products) => {
          dispatch(addAllProducts(products));
        });
        setInput({ email: '', password: '' });
        navigate('/');
      }).catch((err) => {
        Swal.fire('Error!', err.response.data.msg, 'error');
      });
    } else {
      Swal.fire('Error!', 'Rellena los campos!', 'error');
    }
  };

  const handleOnChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <CssBaseline />
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
        <Typography component="h1" variant="h5">
          My Little Shop
        </Typography>
        <Box
          component="form"
          onSubmit={handleOnSubmit}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            type="email"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoFocus
            value={input.email}
            onChange={handleOnChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            value={input.password}
            onChange={handleOnChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            sign in
          </Button>
          <Grid container>
            <Grid item xs>
              Forgot password?
            </Grid>
            <Grid item component={Link} to="/singup">
              Don&rsquo;t have an account? Sign Up
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default Login;
