import './Css/App.css'
import Navbar from './Components/Navbar/Navbar'
import HomePage from './Components/Home Page/homepage'
import Cart from './Components/Shopping Cart/shopping-cart'
import Orders from './Components/orders';
import SignUp from './Components/Authentication/signup.js';
import Login from './Components/Authentication/login';
import Admin from './Components/Admin/Admin';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Nav } from 'react-bootstrap';
import ProductsPage from './Components/Products-Page/products';
import ProductDetail from './Components/Product-Details-Page/product-detail';
import Checkout from './Components/Checkout/checkout';
import TestPage from './testPage';
import { useEffect, useState } from 'react';


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
          <Route path={'/products/:_id'} element={<ProductDetail/>}/>
          <Route path={'/signup'} element={<SignUp/>}/>
          <Route path={'/login'} element={<Login/>}/>
          <Route path={'/admin'} element={<Admin />}/>
          <Route path={'/checkout'} element={<Checkout />}/>
          <Route path={'/testPage'} element={<TestPage />}/>
        </Routes>
      </div>
    </Router >
  );
}

export default App;
