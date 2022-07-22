import React from 'react';
import { Container } from 'react-bootstrap';
import CartItem from '../components/CartItem';
import gambar1 from '../assets/gambar1.jpg';
import gambar2 from '../assets/gambar2.jpg';
import gambar3 from '../assets/gambar3.jpg';
import { Navigate } from 'react-router-dom';


const dummyProducts = [
    {
        id: 3,
        title: "Produk A",
        price: "15000",
        description: "Lorem Ipsum",
        image: gambar1,
        quantity:1,
    },

    {
        id: 5,
        title: "Produk B",
        price: "70000",
        description: "besar",
        image: gambar2,
        quantity:2,
    },

    {
        id: 2,
        title: "Produk C",
        price: "20000",
        description: "besar",
        image: gambar3,
        quantity:3,
    },
]

function Carts({isLogedIn}) {

    if (!isLogedIn) {
        return (
            <Navigate to='/auth/login' replace />
        )
    }

    return (
        <Container>
           {dummyProducts.map((product) => (
             <CartItem  key= {product.id} item={product} />

           ))}
        </Container>

    );
}

export default Carts;