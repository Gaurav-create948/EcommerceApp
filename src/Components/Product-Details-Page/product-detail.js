import Button from "react-bootstrap/Button";
import { useParams, Link } from "react-router-dom";
import items from "../items";
import "./products-detail.css";

function ProductDetail() {
  const { id } = useParams();
  const data = items.filter(function (items) {
    return items.id == id;
  });
  return (
    <div className="product-detail">
      <div className="image">
        <img src={data[0].image}></img>
      </div>
      <div className="details">
        <h1>
          {data[0].description} {data[0].id}
        </h1>
        <p>price : {data[0].price}</p>
        <Button variant="dark" className="btn btn-sm">
          Add to Cart
        </Button>
        <Link to="/buy/checkout">
        <Button variant="dark" className="btn btn-sm">
          Buy Now
        </Button>
        </Link>

        {/* <p>About this item :</p>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </p> */}
      </div>
    </div>
  );
}

export default ProductDetail;
