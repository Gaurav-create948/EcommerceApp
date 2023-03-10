import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import "./products-detail.css";
import Cookies from "js-cookie";
import { Container, Col, Row, Button, Card } from "react-bootstrap";
import UserContext from "../../Context/Context";

function ProductDetail() {
  const { _id } = useParams();
  const [product, setProduct] = useState({});
  const user = useContext(UserContext);
  const { isAuthenticated, Email } = user.userInfo;

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
  })

  async function AddtoCart() {
    if(isAuthenticated){
      try {
        await fetch('http://localhost:5000/addToCart', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            product, Email
          })
        })
        .then(res => res.json())
        .then(data => {
          user.updateUserCart(data.Cart);
        })
      } catch (error) {
        console.log(error);
      }
    }
    else{
      window.location.replace('/login');
    }
  };

  // this is opening payment card
  function OpenPaymentPage(Data) {
    // Data is the data of the order that has been created from the server.
    // all options are getting initailized
    let options = {
      key: Data.keyId,
      amount: Data.data.amount,
      currency: Data.data.currency,
      name: "Company name",
      order_id: Data.data.id, // order id

      // handler function for successfull payment
      handler: function (response) {
        // console.log("this is response after a successfull payment", response);
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = response;
        fetch('http://localhost:5000/payment/verify', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            razorpay_order_id, razorpay_payment_id, razorpay_signature
          })
        })
          .then(res => res.json())
          .then((data) => {
            console.log(data);
            // console.log(a.setOrders);
            // user.setOrders(product);
          })
          .catch((err) => {
            console.log(err);
          })
      }
    };

    // razorpay card
    var rzp1 = new window.Razorpay(options);
    rzp1.open(); // opening the razorpay card
    // console.log(Data);
  }

  // This is creating the order instance in server backend
  async function payment() {
    if(isAuthenticated){
      const { price } = product;
      await fetch('http://localhost:5000/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          price
        })
      })
        .then(res => res.json())
        .then((data) => {
          // console.log(data);
          OpenPaymentPage(data);
        })
        .catch((err) => {
          console.log(err);
        })
    }
    else{
      window.location.replace('/login');
    }
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

            {/* Buy now button check onClick function */}
            <Button type="submit" className="btn btn-lg" onClick={payment}>Buy Now</Button>
            {/* Add to cart button check onClick function */}
            <Button type="submit" className="btn btn-lg" onClick={AddtoCart}>Add to Cart</Button>
          </Card.Body>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail;
