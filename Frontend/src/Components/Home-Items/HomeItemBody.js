import './home-item-body.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
// import Column from 'react-bootstrap/Col'
// import Choosegift from './Choose Gift/choose-gift'
import HomeItemsCard from "./Home Items Card/home-items-card"
import { useEffect, useState } from 'react'


function Item() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function fetchData(){
            await fetch('http://localhost:5000/products', {
                credentials : "include"
            })
            .then(res => res.json())
            .then(data =>{
                setProducts(data);
            })
            .catch(err => console.log(err))
        }
        fetchData();
    }, [])

    return (
        <Container fluid>
            <Row>
                <HomeItemsCard items = {products}/>
            </Row>
        </Container>
    );
}

export default Item;