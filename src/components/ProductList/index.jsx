import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
import ProductCart from '../ProductCart';

export default function ProductList() {
  const products = useSelector((state) => state.products.products);

  return (
    <Box display="flex" flexDirection="column" marginTop="15px" sx={{ flexGrow: 1 }}>
      <Grid spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {products.map(({
          id, image, title, description, discountPercentage, price, stock,
        }) => (
          <ProductCart
            key={id}
            id={id}
            image={image}
            title={title}
            description={description}
            discountPercentage={discountPercentage}
            price={price}
            stock={stock}
          />
        ))}
      </Grid>
    </Box>
  );
}
