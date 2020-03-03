import React from "react";
import { Link } from "gatsby";
import '../../assets/styles/_index.scss';
import '../../assets/styles/_custom.scss';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

import HeaderNavbar from '../../components/header-navbar/HeaderNavbar';
import Header from '../../components/header/Header';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import ContactForm from '../../components/contact-form/ContactForm';
import Membership from '../../components/membership/Membership';
import Footer from '../../components/footer/Footer';

const RoomsDetailPage = () => (
    <>
        <HeaderNavbar />

        <Header headerBg="roomsdetails-bg" headerContent="The Derby Room" buttonName="Contact Us" buttonLink="/contact-us" />

        <Breadcrumb />

        <section className="layout-home">
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col lg={10} className="">
                        <div className="">
                            <h3 className="mb-0 custom-heading-line fox-font30">A spacious and quiet room with a decorative fireplace and elegant French windows where you can retreat from the hustle and bustle of Central London. Make use of the workspace with desk and complimentary internet, pamper yourself in the tasteful bathroom where you’ll find an array of luxurious toiletries. Fall asleep watching TV in the comfort of your King sized Hypnos bed.</h3>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <section className="layout-grid">
            <ScrollAnimation animateIn="fadeIn">
                <div className="content-img-rht rhtroomdetails1">
                    <Container>
                        <Row>
                            <Col lg={6} md={6}>
                                <div className="pr-lg-5 mr-lg-5 content-details py-0 py-lg-5">
                                    <h4 className="mb-5 custom-content-line fox-font24">Continental Breakfast is included for our guests, with an option to enjoy room service breakfast or indeed drinks from the bar in the comfort of your room. Your home from home room includes all the facilities one would expect.</h4>
                                    <p className="mb-5 custom-content-line fox-font19">Whether you select a front-facing Executive Room, overlooking elegant Clarges Street, or choose the exceptionally quiet and peaceful environment provided by our luxurious suites, you’ll enjoy the warmth and hospitality to be found at the Fox Club.</p>
                                    <Link to="/" className="btn fox-btn mb-5">Book with us</Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeIn">
                <div className="content-img-lht lhtroomdetails1">
                    <Container>
                        <Row>
                            <Col lg={6} md={6}></Col>
                            <Col lg={6} md={6}>
                                <div className="pl-lg-4 ml-lg-5 content-details py-0 py-lg-5">
                                    <h2 className="mb-5 custom-heading-line fox-font40">Features</h2>

                                    <p className="custom-content-line fox-font19">30 sqm Executive Room</p>
                                    <div className="member-border mb-4"></div>

                                    <p className="custom-content-line fox-font19">King sized Hypnos bed</p>
                                    <div className="member-border mb-4"></div>

                                    <p className="custom-content-line fox-font19">Complimentary continental breakfast included</p>
                                    <div className="member-border mb-4"></div>

                                    <p className="custom-content-line fox-font19">Complimentary internet</p>
                                    <div className="member-border mb-4"></div>

                                    <p className="custom-content-line fox-font19">Quiet & spacious room</p>
                                    <div className="member-border mb-4"></div>

                                    <p className="custom-content-line fox-font19">Workspace with writing desk</p>
                                    <div className="member-border mb-4"></div>

                                    <p className="custom-content-line fox-font19">Iron/ Ironing Board</p>
                                    <div className="member-border mb-4"></div>

                                    <p className="custom-content-line fox-font19">Fridge with complimentary water</p>
                                    <div className="member-border mb-4"></div>

                                    <p className="custom-content-line fox-font19">Tea & Coffee making facilities</p>
                                    <div className="member-border mb-4"></div>

                                    <p className="custom-content-line fox-font19">In-room safe</p>
                                    <div className="member-border mb-4"></div>

                                    <p className="custom-content-line fox-font19">Room service breakfast (optional)</p>
                                    <div className="member-border mb-4"></div>

                                    <p className="custom-content-line fox-font19">Accommodation rates are inclusive of VAT</p>
                                    <div className="member-border mb-4"></div>

                                    <p className="custom-content-line fox-font19">Television</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </ScrollAnimation>
        </section>

        <section className="layout-contact">
            <div className="container-fluid">
                <Row>
                    <Col lg={6} md={6} className="contact-bg-lft detail">
                        <div className="px-5">
                            <h5 className="mb-5">Contact Us</h5>
                            <ContactForm radioSelect="rooms" />
                        </div>
                    </Col>
                    <Col lg={6} md={6} className="px-0">
                        <ScrollAnimation animateIn="fadeIn" className="contact-bg-rht room-detail">
                        </ScrollAnimation>
                    </Col>
                </Row>
            </div>
        </section>

        <section className="layout-home">
            <Container>
                <Row className="d-flex justify-content-center text-center">
                    <Col lg={6} md={6} className="room-border mb-md-0 mb-5">
                        <h2 className="mb-5 custom-heading-line fox-font40">Food & Drink</h2>
                        <p className="custom-content-line fox-font19">You can order <Link to="/" className="content-link">drinks from the bar</Link> to enjoy in your room. A continental Breakfast is provided for all our guests.</p>
                        <ScrollAnimation animateIn="fadeIn">
                            <div><Link to="/food-and-drink" className="read-more mr-4">Come and Join Us</Link> <ScrollAnimation animateIn="fadeInLeft" className="fade-inline"><i className="icon icon-red-arrow"></i></ScrollAnimation></div>
                        </ScrollAnimation>
                    </Col>
                    <Col lg={6} md={6} className="">
                        <h2 className="mb-5 custom-heading-line fox-font40">Events</h2>
                        <p className="custom-content-line fox-font19">Let us organise a special event for your family or business associates here at the Fox Club. Learn more here.</p>
                        <ScrollAnimation animateIn="fadeIn">
                            <div><Link to="/events/host-your-own-events" className="read-more mr-4">Host Your Own Events</Link> <ScrollAnimation animateIn="fadeInLeft" className="fade-inline"><i className="icon icon-red-arrow"></i></ScrollAnimation></div>
                        </ScrollAnimation>
                    </Col>
                </Row>
            </Container>
        </section>

        <Membership />

        <Footer />
    </>
)

export default RoomsDetailPage