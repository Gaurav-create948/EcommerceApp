import './home-item-body.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Column from 'react-bootstrap/Col'
import Choosegift from './choose-gift'
import HomeItems from "./home-items"



function item() {
    return (
        <Container fluid>
            <Row>
                <Choosegift/>
                <HomeItems />
            </Row>
        </Container>
    );
}

export default item;