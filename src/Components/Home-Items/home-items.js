import "./home-items.css";
import Row from "react-bootstrap/Row";
import Column from "react-bootstrap/Col";
import Cards from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Items from "../items";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Product from "../Product-Details-Page/product-detail";
import context from "react-bootstrap/esm/AccordionContext";
import Context from "../../Context/Context";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { useContextValue } from "../../Context/Context";

function CreateCards(props) {
  const { id, image, description, price } = props;
  const [{basket}, dispatch] = useContextValue();

  console.log(basket.length);

  const addToBasket = () => {
    // dispatch some action into the data layer meaning pushing some action into the data layer
    dispatch({
      type: "Add To Basket",
      item: {
        id: id,
        description: description,
        image: image,
        price, price
      },
    });
  };

  return (
    <Column lg={3} key={id} className="my-item-cards">
      <div className="product">
        <Link to={`/products/${id}`}>
          <Cards>
            <Cards.Img variant="top" src={image} />
            <Cards.Body>
              <Cards.Title>{description}</Cards.Title>
              <Cards.Text>
                <span>Price</span>
                <span>{price}</span>
              </Cards.Text>
              <Link to="/">
                <Button
                  variant="dark"
                  className="btn btn-sm"
                  onClick={addToBasket}
                >
                  Add To Cart
                </Button>
              </Link>
            </Cards.Body>
          </Cards>
        </Link>
      </div>
    </Column>
  );
}

function HomeItems() {
  return <Row className="items-row">{Items.map(CreateCards)}</Row>;
}

export default HomeItems;
