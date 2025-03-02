import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import "../../styles/styles.css";

const servicesData = [
    {
        id: 1,
        title: "Rekonstrukce Rodinného domu",
        caption: "Kompletní rekonstrukce rodinných domů včetně fasád, střech a interiérů. Zajistíme modernizaci s důrazem na energetickou úsporu."
    },
    {
        id: 2,
        title: "Rekonstrukce Bytové jednotky",
        caption: "Obnovíme váš byt od základů - nové podlahy, elektroinstalace, kuchyně i koupelny. Přeměníme staré prostory v moderní domov."
    },
    {
        id: 3,
        title: "Rekonstrukce Společných prostor",
        caption: "Modernizace společných prostor v bytových domech, včetně chodeb, výtahových šachet a sklepních prostor. Zlepšíme estetiku i funkčnost."
    },
    { 
        id: 4,
        title: "Novostavba na klíč",
        caption: "Postavíme vám nový dům podle vašich představ. Od projektu po finální realizaci – kvalitní a bezstarostné řešení na míru." 
    },
    { 
        id: 5,
        title: "Půdní přestavby",
        caption: "Vytvoříme z nevyužitého podkroví krásné obytné prostory. Maximální využití prostoru s důrazem na světlo a komfort."
    },
    { 
        id: 6,
        title: "Elektroinstalace a Vodoinstalace",
        caption: "Nové rozvody elektřiny, vody a plynu v rámci rekonstrukcí i novostaveb. Používáme moderní a bezpečné technologie."
    },
    {
        id: 7,
        title: "Rekonstrukce kuchyně, koupelny",
        caption: "Kompletní renovace kuchyní a koupelen včetně obkladů, sanitární techniky a elektroinstalací. Elegantní design a praktické řešení."
    }
];

const Services = () => {
    return (
        <Container className='services-container'>
            <h2>Naše služby</h2>
            <Row className='justify-content-center'>
                {servicesData.map((service) => (
                    <Col key={service.id} md={6} lg={4} className="mb-4">
                        <Card className="service-card">
                            <Card.Body>
                                <h5 className="service-title">{service.title}</h5>
                                <p className="service-caption">{service.caption}</p>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Services;
