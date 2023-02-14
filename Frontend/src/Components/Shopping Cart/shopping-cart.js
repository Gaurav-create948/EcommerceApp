import './shopping-cart.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import {UserContext} from '../../Context/Context';
import { useState } from 'react'


function Cart() {
    // const[{basket}, dispatch] = useContextValue();
    const[initialPrice, setInitilPrice] = useState(0);
    return (
        <div className='shopping-list'>
        </div>
    )
}

export default Cart;
            // <Container className='shopping-cart'>
            //     <Row>
            //         {/* This is showing the shopping list */}
            //         <Col xxl={8} xl={8} lg={8} className='shopping-list'>
            //             <h1>Your shopping list</h1>

            //         </Col>
            //         {/* This will show the subtotal ammount */}
            //         <Col xxl={4} xl={4} lg={4} className='items-subtotal'>
            //             <span>Subtotal </span>
            //             <span>({basket.length} : Item)</span>
            //             <span>Rupee {initialPrice}</span>
            //             <Button value="submit" className='btn-sm btn-block'>Proceed to Buy</Button>
            //         </Col>
            //     </Row>
            // </Container>