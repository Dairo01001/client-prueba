import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardCrud from '../../components/CardCrud';
import AppBar from '../../components/AppBar';
import { getProductById } from '../../service/product';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id).then((produ) => {
      setProduct(produ);
    });
  }, []);

  if (!product) {
    return <h1>Loading...</h1>;
  }

  const {
    image, description, title, price,
  } = product;

  return (
    <div>
      <AppBar />
      <div style={{
        display: 'flex', alignContent: 'center', flexDirection: 'column', marginTop: '15px', width: '100%', height: '100%',
      }}
      >
        <CardCrud image={image} description={description} title={title} price={price} />
      </div>
    </div>
  );
}
