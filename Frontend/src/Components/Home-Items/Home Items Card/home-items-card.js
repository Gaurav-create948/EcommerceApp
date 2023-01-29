import "./home-items.css";
import Row from "react-bootstrap/Row";
import Column from "react-bootstrap/Col";
import Cards from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Items from "../../items";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Product from "../../Product-Details-Page/product-detail";
import context from "react-bootstrap/esm/AccordionContext";
import Context from "../../../Context/Context";
import { useEffect, useState } from "react";
import Navbar from "../../Navbar/Navbar";
import { useContextValue } from "../../../Context/Context";

function CreateCards(props) {
  const {_id, title, image, price } = props;
  return (
    <Column lg={3} key={_id} className="my-item-cards">
      <div className="product">
        <Link to={`/products/${_id}`}>
          <Cards>
            <Cards.Img variant="top" src={image} />
            <Cards.Body>
              {/* <Cards.Title>{title}</Cards.Title>
              <Cards.Text>
                <span>Price</span>
                <span>{price}</span>
              </Cards.Text>
              <Link to="/buy">
                <Button
                  variant="dark"
                  className="btn btn-sm"
                >
                  Buy Now
                </Button>
              </Link> */}
            </Cards.Body>
          </Cards>
        </Link>
      </div>
    </Column>
  );
}

function HomeItemsCard(props) {
  const items = props.items;
  return (
    <div>
      <Row className="items-row">{items.map(CreateCards)}</Row>
    </div>
  );
}

export default HomeItemsCard;
