import React from "react"
import { Link } from "gatsby";
import '../assets/styles/_index.scss';
import '../assets/styles/_custom.scss';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const errorLogo = require('../assets/img/logo1.svg');

const MaintenancePage = () => (
    <section className="layout-error maintenance d-flex align-items-center">
        <Container>
            <Row className="d-flex justify-content-center content">
                <Col lg={6} className="text-center">
                    <ScrollAnimation animateIn="fadeIn">
                        <Link to=""><img src={errorLogo} className="img-fluid mb-5" alt="" /></Link>
                    </ScrollAnimation>

                    <ScrollAnimation animateIn="fadeIn" delay={200}>
                        <h2 className="mb-4 custom-heading-line fox-font40">Please bear with us!</h2>
                    </ScrollAnimation>

                    <ScrollAnimation animateIn="fadeIn" delay={300}>
                        <p className="mb-4 custom-content-line fox-font19">We're doing some essential maintenance that requires a bit of downtime.</p>
                        <p className="mb-4 custom-content-line fox-font19">We hope to re-open the site for business shortly.</p>
                        <p className="custom-content-line fox-font19">Thank you for your patience and understanding.</p>
                    </ScrollAnimation>
                </Col>
            </Row>
        </Container>
    </section>
)

export default MaintenancePage
