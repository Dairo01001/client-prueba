import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  TextField,
  Typography,
  CssBaseline,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import validations from '../../utils/validations';
import { singup } from '../../service/user';
import { addUser } from '../../redux/reducer/userSlice';

function Singup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    email: '',
    password: '',
    repeatPassword: '',
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (input.email && input.password && input.repeatPassword) {
      if (validations.isEmail(input.email)) {
        if (input.password === input.repeatPassword) {
          singup({ email: input.email, password: input.password }).then((data) => {
            dispatch(addUser(data));
            navigate('/products');
          }).catch((err) => {
            Swal.fire('Error!', err.response.data.msg, 'error');
          });
          setInput({ email: '', password: '', repeatPassword: '' });
        } else {
          Swal.fire('Error!', 'Passwords do not match', 'error');
        }
      } else {
        Swal.fire('Error!', 'Invalid format for email (foo@bar.com)', 'error');
      }
    } else {
      Swal.fire('Error!', 'Fill the fields', 'error');
    }
  };

  return (
    <div>
      <CssBaseline />
      <Box
        sx={{
          marginTop: '8px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <AppRegistrationIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sing Up
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleOnSubmit}>
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
            label="Password"
            type="password"
            id="password"
            value={input.password}
            onChange={handleOnChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="repeatPassword"
            label="Repeat password"
            type="password"
            id="repeatPassword"
            value={input.repeatPassword}
            onChange={handleOnChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            endIcon={<SendIcon />}
            sx={{ mt: 3, mb: 2 }}
          >
            sign up
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default Singup;
