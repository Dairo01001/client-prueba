import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import AddBoxIcon from '@mui/icons-material/AddBox';
import InputIcon from '@mui/icons-material/Input';
import OutputIcon from '@mui/icons-material/Output';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { removeUser } from '../../redux/reducer/userSlice';

function Nav() {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button startIcon={<FormatListBulletedIcon />} onClick={() => navigate('/')} color="inherit">
            Products
          </Button>
          {!user ? null
            : (
              <Button startIcon={<AddBoxIcon />} onClick={() => navigate('/register')} color="inherit">
                Crear
              </Button>
            ) }
          {!user ? (
            <Button endIcon={<InputIcon />} onClick={() => navigate('/login')} color="inherit">
              login
            </Button>
          ) : (
            <Button endIcon={<OutputIcon />} onClick={() => dispatch(removeUser())} color="inherit">
              logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Nav;
