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
import Footer from '../../components/footer/Footer';

const MembershipDetailPage = () => (
    <>
        <HeaderNavbar />

        <Header headerBg="membershipdetail-bg" headerContent="Mayfair Membership" buttonName="Apply Now" buttonLink="/membership/membership-form" />

        <Breadcrumb />

        <section className="layout-home">
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col lg={10} className="">
                        <div className="">
                            <h3 className="mb-0 custom-heading-line fox-font30">The Fox Club is a hidden gem in the heart of elegant Mayfair. Membership benefits include priority when booking meeting spaces or reserving a luxurious room or suite for an overnight stay, for you.</h3>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <section className="layout-grid">
            <ScrollAnimation animateIn="fadeIn">
                <div className="content-img-rht rhtmemberdetails1">
                    <Container>
                        <Row>
                            <Col lg={6} md={6}>
                                <div className="pr-lg-5 mr-lg-5 content-details py-0 py-lg-5">
                                    <h2 className="mb-5 custom-heading-line fox-font40">What’s included?</h2>

                                    <p className="custom-content-line fox-font19">Full use of our club (entry by coded membership card)</p>
                                    <div className="member-border mb-4"></div>

                                    <p className="custom-content-line fox-font19">Entry for you and your guests (up to 3 guests)</p>
                                    <div className="member-border mb-4"></div>

                                    <p className="custom-content-line fox-font19">Priority hotel reservations</p>
                                    <div className="member-border mb-4"></div>

                                    <p className="custom-content-line fox-font19">As a member enjoy preferred accommodation rates</p>
                                    <div className="member-border mb-4"></div>

                                    <p className="custom-content-line fox-font19">Access to the Fox Club events and newsletter</p>
                                    <div className="member-border mb-4"></div>

                                    <p className="custom-content-line fox-font19">Priority private hire event space</p>
                                    <div className="member-border mb-4"></div>

                                    <p className="custom-content-line fox-font19">Corporate rates for meeting space, with our preferred partners</p>
                                    <div className="member-border mb-4"></div>

                                    <p className="custom-content-line fox-font19">Free use of wifi</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeIn">
                <div className="content-img-lht lhtmemberdetails1">
                    <Container>
                        <Row>
                            <Col lg={6} md={6}></Col>
                            <Col lg={6} md={6}>
                                <div className="pl-lg-5 ml-lg-5 content-details">
                                    <h2 className="mb-4 custom-heading-line fox-font40">More than one of you?</h2>
                                    <h4 className="mb-4 custom-content-line fox-font24">Upgrade your Individual Membership to include another member for an additional £200 only.</h4>
                                    <p className="mb-5 custom-content-line fox-font19">This would be suitable for a partner, spouse or colleague and entitles both parties to full use of  <Link to="/" className="content-link">The Fox Club</Link>; it's rooms, bar, food and events space. You will also enjoy access to preferred hotel accommodation and meeting rooms rates with our partners.</p>
                                    <ScrollAnimation animateIn="fadeIn">
                                        <div><Link to="/" className="read-more mr-4">Apply for a Joint Membership</Link> <ScrollAnimation animateIn="fadeInLeft" className="fade-inline"><i className="icon icon-red-arrow"></i></ScrollAnimation></div>
                                    </ScrollAnimation>
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
                            <h5 className="mb-5 custom-heading-line fox-font40">Ready to apply for membership?</h5>
                            <p className="custom-content-line fox-font19">Aged 18 years or older? You’ll be welcomed into the Fox Club upon completion of your application and on payment of the joining fee and annual subscription.</p>
                            <Link to="/" className="btn fox-btn px-4 py-3 mb-5">Become a Member</Link>
                        </div>
                    </Col>
                    <Col lg={6} md={6} className="px-0">
                        <ScrollAnimation animateIn="fadeIn" className="contact-bg-rht membership-detail">
                        </ScrollAnimation>
                    </Col>
                </Row>
            </div>
        </section>

        <Footer />
    </>
)

export default MembershipDetailPage