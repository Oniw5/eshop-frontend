import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CardItem from './CardItem';
import gambar1 from '../assets/gambar1.jpg';
import gambar2 from '../assets/gambar2.jpg';
import gambar3 from '../assets/gambar3.jpg';

const dummyProducts = [
    {
        id: 3,
        title: "Produk A",
        price: "15000",
        description: "Lorem Ipsum",
        image: gambar1
    },

    {
        id: 5,
        title: "Produk B",
        price: "70000",
        description: "besar",
        image: gambar2
    },

    {
        id: 2,
        title: "Produk C",
        price: "20000",
        description: "besar",
        image: gambar3
    },
]


function CardList() {
    return (
        <Row xs={1} xl={4} sm={2} lg={3} md={3}>
        {dummyProducts.map((product) => (
            <Col key={product.id}>
        <CardItem item={product}/>
        
        </Col>
        ))}
        </Row>
    )

    }
export default CardList;