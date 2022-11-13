import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import ProductCart from '../ProductCart';
import { getAllProducts } from '../../service/product';
import { addAllProducts } from '../../redux/reducer/productSlice';

export default function ProductList() {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  React.useEffect(() => {
    getAllProducts().then((data) => {
      dispatch(addAllProducts(data));
    });
  }, []);

  if (products.length === 0) {
    return <h1>No Hay productos</h1>;
  }

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
