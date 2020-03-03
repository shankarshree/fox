import React from "react";
import '../../../assets/styles/_index.scss';
import '../../../assets/styles/_custom.scss';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

import HeaderNavbar from '../../../components/header-navbar/HeaderNavbar';
import Header from '../../../components/header/Header';
import Breadcrumb from '../../../components/breadcrumb/Breadcrumb';
import ContactForm from '../../../components/contact-form/ContactForm';
import Membership from '../../../components/membership/Membership';
import Footer from '../../../components/footer/Footer';

const upcoming_1 = require('../../../assets/img/upcomingevents.jpg');
const upcoming_2 = require('../../../assets/img/upcomingevents1.jpg');
const upcoming_3 = require('../../../assets/img/upcomingevents3.jpg');

const UpcomingEventsSubPage = () => (
    <>
        <HeaderNavbar />

        <Header headerBg="upcomingeventssub-bg" headerContent2="Informative evening of Property & Politics" contentSub="18 September 2019 -  6.00 - 7.30 pm" buttonName="Contact Us" buttonLink="/contact-us" />

        <Breadcrumb />

        <section className="layout-home layout-fooddrink">
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col lg={10} className="">
                        <div className="">
                            <h3 className="mb-5 custom-heading-line fox-font30">Hear from Mr. Charles Curran former investment banker, owner of Maskells London and International Estate Agents on the subject of Property & Politics</h3>
                            <p className="mb-5 custom-content-line fox-font19">‘An opinion as to what might happen to the market under a managed Brexit, a no deal scenario, or under a Labour Government’.</p>
                            <ScrollAnimation animateIn="fadeIn">
                                <img src={upcoming_1} className="img-fluid mb-5" alt="" />
                            </ScrollAnimation>
                            <p className="mb-5 custom-content-line fox-font19">As part of The Fox Club's informative networking series please confirm if you would like to attend this event. You are welcome to bring a guest/s (subject to available space).</p>
                            <p className="mb-5 custom-content-line fox-font19">The Fox club is now serving All Day dining and from 7 pm till late cheese, charcuterie platters & other small plates are still available.</p>
                        </div>
                    </Col>

                    <Col lg={10}>
                        <Row>
                            <Col lg={6} md={6}>
                                <ScrollAnimation animateIn="fadeIn">
                                    <img src={upcoming_2} className="img-fluid" alt="" />
                                </ScrollAnimation>
                            </Col>
                            <Col lg={6} md={6}>
                                <ScrollAnimation animateIn="fadeIn" delay={300}>
                                    <img src={upcoming_3} className="img-fluid" alt="" />
                                </ScrollAnimation>
                            </Col>
                        </Row>

                        <p className="custom-content-line fox-font19">The Fox Club's recent refurbishment makes the perfect place for All day dining, smaller events, drinks, canapes or private functions. The Club also offers 8 luxuriously appointed bedrooms & suites.</p>
                    </Col>
                </Row>
            </Container>
        </section>

        <section className="layout-contact">
            <div className="container-fluid">
                <Row>
                    <Col lg={6} md={6} className="contact-bg-lft">
                        <div className="px-5">
                            <h5 className="mb-5">Contact Us</h5>
                            <ContactForm radioSelect="events" />
                        </div>
                    </Col>
                    <Col lg={6} md={6} className="px-0">
                        <div className="contact-bg-rht"></div>
                    </Col>
                </Row>
            </div>
        </section>

        <Membership />

        <Footer />
    </>
)

export default UpcomingEventsSubPage