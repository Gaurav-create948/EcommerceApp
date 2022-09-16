import './Css/App.css'
import Navbar from './Components/Navbar/Navbar'
import HomePage from './Components/Home Page/homepage'
import Cart from './Components/Shopping Cart/shopping-cart'
import Orders from './Components/orders';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Nav } from 'react-bootstrap';
import ProductsPage from './Components/Products-Page/products';
import ProductDetail from './Components/Product-Details-Page/product-detail';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/cart' element={<Cart />}/>
          <Route path='/cart/:id/:name' element={<Cart />}/>
          <Route path='/my-orders' element={<Orders />}/>
          <Route path={'/product/:name'} element={<ProductsPage/>}/>
          <Route path={'/products/:id'} element={<ProductDetail/>}/>
        </Routes>
      </div>
    </Router >
  );
}

export default App;
