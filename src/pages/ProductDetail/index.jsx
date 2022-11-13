import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import CardCrud from '../../components/CardCrud';
import AppBar from '../../components/AppBar';
import { getProductById } from '../../service/product';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      Swal.fire(
        'Error',
        'Nesecitas estar logueado para ver los detalles del producto!',
        'warning',
      );
      navigate('/login');
    } else {
      getProductById(id).then((produ) => {
        setProduct(produ);
      });
    }
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
      <div
        style={{
          display: 'flex',
          alignContent: 'center',
          flexDirection: 'column',
          marginTop: '15px',
          width: '100%',
          height: '100%',
        }}
      >
        <CardCrud
          token={user.token}
          image={image}
          description={description}
          title={title}
          price={price}
          id={id}
        />
      </div>
    </div>
  );
}
