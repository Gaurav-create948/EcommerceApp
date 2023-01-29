import './footer.css';
import Container from 'react-bootstrap/Container';
import Column from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Footer() {
    return (
        <div className='footer'>
            <Container>
                <Row>
                    <Column xxl={3} xl={3} lg={3}>
                        <a href="#">About Us</a>
                    </Column>
                    <Column xxl={3} xl={3} lg={3}>
                        <a href="#">Contact Us</a>
                    </Column>
                    <Column xxl={3} xl={3} lg={3} className="social-media">
                        <h4><strong>Social Media</strong></h4>
                        <div className="social-links">
                            <Link to="#" className='links'>
                                <Instagram />
                            </Link>
                            <Link to="#" className='links'>
                                <FacebookIcon />
                            </Link>
                            <Link to="#" className='links'>
                                <WhatsAppIcon />
                            </Link>
                        </div>
                    </Column>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;