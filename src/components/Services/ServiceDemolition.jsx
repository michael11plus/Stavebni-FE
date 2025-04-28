import React from 'react';
import '../../styles/services.css';
import { Col, Container, Row } from 'react-bootstrap';
import { demolitionHeader } from '../../assets';

const ServiceDemolition = () => {
    const [ opacity, setOpacity ] = React.useState(0);
     React.useEffect(() => {
        window.scrollTo(0, 0);
        setOpacity(1);
    }, []);

    return(
        <Container fluid className='p-0'>
            <Row>
                <Col className='position-relative p-0' style={{contain: 'content', maxHeight: '400px'}}>
                    <div
                        alt="stavební práce"
                        className='d-flex flex-column justify-content-center'
                        style={{
                            width: '100%',
                            height: '400px',
                            transform: '',
                            background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${demolitionHeader})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center calc(100% + 200px)'
                        }}
                    >
                        <p className={`base-width mx-auto mt-5 ${opacity ? 'opacity-1' : 'opacity-0'}`} style={{fontSize: '40px', fontWeight: '400', paddingTop: '70px', color: 'white', transition: 'opacity ease-in-out 1s'}}>Demoliční a uklízecí práce</p>
                    </div>
                </Col>
            </Row>
            <Row className='base-width m-auto'>
                <Col className={`p-0 py-5 ${opacity ? 'opacity-1' : 'opacity-0'}`} style={{transition: 'opacity ease-in-out 1s'}}>
                    <p>Kompletní rekonstrukce domů a bytů</p>
                    <p>Elektrikářské práce</p>
                    <p>Instalatérské práce</p>
                    <p>Trihlářské práce</p>
                    <p>Pokládka dlažeb a obkladů</p>
                    <p>Rekonstrukce podlah, sádrokartónů a bytových jader</p>
                    <p>Klempířské práce</p>
                    <p>Zednické práce</p>
                    <p>Opravy</p>
                </Col>
            </Row>
        </Container>
    );
};

export default ServiceDemolition;