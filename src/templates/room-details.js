import React from "react";
import { Link } from "gatsby";
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import '../assets/styles/_index.scss';
import '../assets/styles/_custom.scss';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import Img from "gatsby-image"

import HeaderNavbar from '../components/header-navbar/HeaderNavbar';
import Header from '../components/header/Header';
import ContactForm from '../components/contact-form/ContactForm';
import Membership from '../components/membership/Membership';
import Footer from '../components/footer/Footer';
const logo = require('../assets/img/logo1.svg');

class RoomsDetailPage extends React.Component {
  render() {
    const roomdetails = get(this.props, 'data.contentfulRooms')

    const roomName = get(this, 'props.data.contentfulRooms.roomName')
    const FormBanner = get(this, 'props.data.contentfulConfiguration.contactFormBackground.fluid.src')

    const seoMetaTitle = get(this, 'props.data.contentfulRooms.seoMetaTitle')
    const seoMetaDescription = get(this, 'props.data.contentfulRooms.seoMetaDescription')
    const seoMetaKeywords = get(this, 'props.data.contentfulRooms.seoMetaKeywords')
    const url = typeof window !== 'undefined' ? window.location.href : ''

    return (
      <>
        <Helmet>
          <title>{seoMetaTitle}</title>
          <meta name="description" content={seoMetaDescription} />
          <meta name="keywords" content={seoMetaKeywords} />
          <link rel="canonical" href={url} />
          <meta property="og:site_name" content="thefoxclub" />
          <meta property="og:url" content={url} />
          <meta property="og:title" content={seoMetaTitle} />
          <meta property="og:type" content="article" />
          <meta property="og:description" content="thefoxclub" />
          <script type="application/ld+json">
            {`{
              "@context": "http://schema.org",
              "@type": "Organization",
              "name": "thefoxclub",
              "sameAs": [],
              "url": "${url}",
              "logo": "https://www.foxclublondon.com${logo}"
            }`}
          </script>
        </Helmet>
        <HeaderNavbar />

        <Header headerBg="roomsdetails-bg" headerImage={roomdetails.bannerImage.fluid.src} headerContent={roomdetails.bannerTitle} buttonName="Contact Us" buttonLink="/contact-us" />

        <section className="header-breadcrumb">
          <Container>
            <Row className="d-flex justify-content-center">
              <Col lg={10} className="px-lg-0">
                <ul className="list-inline">
                  <li className="list-inline-item"><Link to="/" className="breadcrumb-link">Home</Link> <i className="icon icon-arrow mx-2"></i></li>
                  <li className="list-inline-item"><Link to="/rooms" className="breadcrumb-link">ROOMS</Link> <i className="icon icon-arrow mx-2"></i></li>
                  <li className="list-inline-item">{roomName}</li>
                </ul>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="layout-home common">
          <Container>
            <Row className="d-flex justify-content-center">
              <Col lg={10} className="px-lg-5">
                <div className="">
                  <h3 className="mb-0 custom-heading-line fox-font30"
                    dangerouslySetInnerHTML={{
                      __html: roomdetails.aboutRoom.childMarkdownRemark.html,
                    }}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="layout-grid">
          <ScrollAnimation animateIn="fadeIn">
            <div className="content-img-rht rhtroomdetails1">
              <div className="banner-rht" style={{ backgroundImage: `url(${roomdetails.section1Banner.fluid.src})`, }} />
              <Container>
                <Row>
                  <Col lg={6} md={6} className="px-lg-2 px-4 layout-min-height d-flex align-items-center">
                    <div className="pr-lg-5 mr-lg-5 content-details py-0 py-lg-5">

                      <div className="custom-content-line fox-font19"
                        dangerouslySetInnerHTML={{
                          __html: roomdetails.section1Content.childMarkdownRemark.html,
                        }}
                      />
                      <Link to="/contact-us" className="btn fox-btn mb-5">Book with us</Link>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeIn">
            <div className="content-img-lht lhtroomdetails1">
              <div className="banner-lft" style={{ backgroundImage: `url(${roomdetails.section2Banner.fluid.src})`, }} />
              <Container>
                <Row>
                  <Col lg={6} md={6}></Col>
                  <Col lg={6} md={6} className="layout-min-height d-flex align-items-center">
                    <div className="pl-lg-4 ml-lg-5 content-details py-0 py-lg-5">
                      <h2 className="mb-5 custom-heading-line fox-font40">Features</h2>

                      <div className="custom-content-line content-border fox-font19"
                        dangerouslySetInnerHTML={{
                          __html: roomdetails.section2Content.childMarkdownRemark.html,
                        }}
                      />
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
              <Col lg={6} md={6} className="contact-bg-lft detail" style={{ backgroundImage: `url(${FormBanner})`, }}>
                <div className="px-5">
                  <h5 className="mb-5">Contact Us</h5>
                  <ContactForm radioSelect="rooms" />
                </div>
              </Col>
              <Col lg={6} md={6} className="px-0">
                <Img className="contact-bg-rht room-detail" fluid={roomdetails.contactBannerRight.fluid} />

              </Col>
            </Row>
          </div>
        </section>

        <section className="layout-home">
          <Container>
            <Row className="d-flex justify-content-center text-center">
              <Col lg={6} md={6} className="room-border mb-md-0 mb-5 pb-md-0 pb-5">
                <h2 className="mb-5 custom-heading-line fox-font40">Food & Drink</h2>
                <p className="custom-content-line fox-font19 px-lg-5">You can order <Link to="/food-and-drink/drinks-list">drinks from the bar</Link> to enjoy in your room. A continental Breakfast is provided for all our guests.</p>
                <ScrollAnimation animateIn="fadeIn">
                  <div><Link to="/food-and-drink" className="read-more mr-4">Come and Join Us</Link> <ScrollAnimation animateIn="fadeInLeft" className="fade-inline"><i className="icon icon-red-arrow"></i></ScrollAnimation></div>
                </ScrollAnimation>
              </Col>
              <Col lg={6} md={6} className="">
                <h2 className="mb-5 custom-heading-line fox-font40">Events</h2>
                <p className="custom-content-line fox-font19 px-lg-5">Let us organise a special event for your family or business associates here at the Fox Club. Learn more here.</p>
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
  }
}

export default RoomsDetailPage

export const pageQuery = graphql`
  query RoomsBySlug($slug: String!) {

contentfulRooms(slug: { eq: $slug }) {
roomName
    bannerImage {
      fluid(quality: 100, maxWidth: 1400) {
        base64
        srcWebp
        src
        srcSetWebp
      }
    }
    bannerTitle
    aboutRoom {
      childMarkdownRemark {
        html
      }
    }
    section1Content {
      childMarkdownRemark {
        html
      }
    }
    section1Banner {
      fluid(quality: 100, maxWidth: 1200) {
        base64
        srcWebp
        src
        srcSetWebp
      }
    }
    section2Content {
      childMarkdownRemark {
        html
      }
    }
    section2Banner {
      fluid(quality: 100, maxWidth: 1200) {
        base64
        srcWebp
        src
        srcSetWebp
      }
    }

    seoMetaDescription
    seoMetaKeywords
    seoMetaTitle
    contactBannerRight {
      fluid(quality:100) {
           ...GatsbyContentfulFluid_withWebp
      }
    }
  }



  contentfulConfiguration {
    contactFormBackground {
      fluid(quality: 100) {
        base64
        srcWebp
        src
        srcSetWebp
      }
    }
  }

  }
`
