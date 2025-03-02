import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../../styles/styles.css";
import Rebuild1 from "../../assets/Rebuild1.jpeg";

const About = () => {
    return (
        <Container className='about-container' fluid>
            <Row className="justify-content-center text-center">
                <Col md={10} lg={8}>
                    <h3><strong>Stavíme na pevných základech</strong></h3>
                    <p>
                        Rekonstrukce není jen o opravách – je to o proměně prostoru a vytvoření lepšího bydlení.  
                        Naše společnost se specializuje na modernizaci rodinných domů, bytových jednotek  
                        a společných prostor. Každý projekt přizpůsobujeme vašim potřebám a nejnovějším stavebním trendům.
                    </p>
                    <p className="highlight-text">
                        Hledáte partnera pro rekonstrukci? Ať už jde o přestavbu kuchyně, koupelny  
                        nebo celého domu, jsme tu pro vás. Naše zkušenosti a odborné znalosti jsou zárukou  
                        kvalitní a bezproblémové realizace.
                    </p>
                </Col>
            </Row>

            <Row className="justify-content-center mt-4">
                <Col md={10} lg={8} className="text-center">
                    <div className="image-container">
                        <img src={Rebuild1} alt="Rekonstrukce domu" className="about-image" />
                    </div>
                    <p className="image-caption">Ukázka naší realizace – rekonstrukce rodinného domu</p>
                </Col>
            </Row>

            <Row className="justify-content-center text-center mt-4">
                <Col md={10} lg={8}>
                    <h4><strong>Na čem si zakládáme?</strong></h4>
                    <p>
                        Každý projekt je jiný, ale náš přístup je vždy stejný – kvalita, preciznost a férové jednání.  
                        Víme, že rekonstrukce může být velkým krokem, proto se snažíme, aby celý proces probíhal  
                        co nejhladčeji a bez zbytečných starostí pro vás.
                    </p>
                    <h4><strong>Máme široké odborné zázemí</strong></h4>
                    <p>
                        Spolupracujeme s ověřenými odborníky v oblasti elektroinstalací, vodoinstalací a stavebních úprav.  
                        Díky tomu vám můžeme nabídnout kompletní řešení pod jednou střechou – od návrhu po realizaci.  
                        Naším cílem je vždy zajistit efektivní a kvalitní práci za rozumnou cenu.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default About;
