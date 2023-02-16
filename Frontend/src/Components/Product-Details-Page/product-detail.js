import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./products-detail.css";
import { Container, Col, Row, Button, Card } from "react-bootstrap";

function ProductDetail() {
  const { _id } = useParams();
  const [product, setProduct] = useState({});

  // getting product with the particular id that user clicked.
  useEffect(() => {
    async function fetchData() {
      await fetch('http://localhost:5000/products', {
        method: "POST",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ _id })
      })
      .then(res => res.json())
      .then(data => {
        setProduct(data); // this is the data of the product user clicked.
      })
      .catch(err => console.log(err));
      }
      fetchData();
    },[])
    
    async function AddtoCart(){
      await fetch('http://localhost:5000/addToCart', {
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
          product
        })
      })
    }

    async function payment(){
      const{price} = product;
      await fetch('http://localhost:5000/payment', {
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
          price
        })
      })
    }

  return (
    <Container className="product-detail">
      <Row>
        <Col xxl={6} xl={6} lg={6}>
          <img src={product.image} alt="product-image" />
        </Col>

        <Col xxl={6} xl={6} lg={6}>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>Price : {product.price}</Card.Text>
            <Link to='/payment'>
              <Button type="submit" className="btn btn-lg" onClick={payment}>Buy Now</Button>
            </Link>
            <Button type="submit" className="btn btn-lg" onClick={AddtoCart}>Add to Cart</Button>
          </Card.Body>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail;
