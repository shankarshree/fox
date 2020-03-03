import React from "react"
import { Link } from "gatsby";
import '../assets/styles/_index.scss';
import '../assets/styles/_custom.scss';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import '../assets/styles/_404.scss';

const errorLogo = require('../assets/img/logo1.svg');

const NotFoundPage = () => (
    <section className="layout-error d-flex align-items-center">
        <Container>
            <Row className="d-flex justify-content-center content">
                <Col lg={6} className="text-center">
                    <ScrollAnimation animateIn="fadeIn">
                        <Link to=""><img src={errorLogo} className="img-fluid mb-5" alt="" /></Link>
                    </ScrollAnimation>

                    <ScrollAnimation animateIn="fadeIn" delay={200}>
                        <h2 className="mb-4 custom-heading-line fox-font40">Sorry, the page you were looking for cannot be found.</h2>
                    </ScrollAnimation>

                    <ScrollAnimation animateIn="fadeIn" delay={300}>
                        <p className="mb-5 custom-content-line fox-font19">This is maybe because it has been removed, we’ve changed its name or it is temporarly unavailable.</p>
                    </ScrollAnimation>
                    <Row>
                        <Col lg={6} md={6} className="mb-4">
                            <ScrollAnimation animateIn="fadeIn" delay={600}>
                                <Link to="/" className="btn fox-btn w250 w-100">Back to Homepage</Link>
                            </ScrollAnimation>
                        </Col>
                        <Col lg={6} md={6}>
                            <ScrollAnimation animateIn="fadeIn" delay={800}>
                                <Link to="/contact-us" className="btn fox-btn w250">Contact Us</Link>
                            </ScrollAnimation>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </section>
)

export default NotFoundPage
