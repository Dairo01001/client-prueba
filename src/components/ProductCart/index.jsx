/* eslint-disable react/prop-types */
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { Link } from 'react-router-dom';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function ProductCart({
  image, title, description, price, discountPercentage, stock, id,
}) {
  return (
    <Paper
      sx={{
        p: 2,
        marginTop: '10px',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#1A2027' : '#fff'),
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase
            component={Link}
            to={`/product/${id}`}
            sx={{ width: 128, height: 128 }}
          >
            <Img alt="complex" src={image} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {title}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Discount:
                {` ${discountPercentage}`}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {`Price: ${price} Stock: ${stock}`}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              $
              {Math.round(price * (1 - (discountPercentage / 100)))}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
