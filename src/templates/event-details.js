import React from "react";
import { graphql } from 'gatsby'
import get from 'lodash/get'
import '../assets/styles/_index.scss';
import '../assets/styles/_custom.scss';
import { Link } from "gatsby";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import Helmet from 'react-helmet'

import HeaderNavbar from '../components/header-navbar/HeaderNavbar';
import Header from '../components/header/Header';
import ContactForm from '../components/contact-form/ContactForm';
import Membership from '../components/membership/Membership';
import Footer from '../components/footer/Footer';
const logo = require('../assets/img/logo1.svg');

class UpcomingEventsSubPage extends React.Component {
  render() {
    const details = get(this.props, 'data.contentfulEvents')
    const contactFormBackground = get(this, 'props.data.contentfulConfiguration.contactFormBackground.fluid.src')
    const contactFormBanner = get(this, 'props.data.contentfulConfiguration.contactFormBanner.fluid.src')
    const seoMetaTitle = get(this, 'props.data.contentfulEvents.seoMetaTitle')
    const seoMetaDescription = get(this, 'props.data.contentfulEvents.seoMetaDescription')
    const seoMetaKeywords = get(this, 'props.data.contentfulEvents.seoMetaKeywords')
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

        <section className="header-bg upcomingeventssub-bg1" style={{ backgroundImage: `url(${details.banner.fluid.src})`, }}>
          <Container>
            <Row className="d-flex justify-content-center">
              <Col lg={11} className="mb-md-5 header-content">
                <ScrollAnimation animateIn="fadeInUp" className="mb-5">
                  <h1>{details.eventName}</h1>

                  {details.place != null && details.eventTime == null &&
                    <p className="sub-heading">{` ${details.place} , ${details.eventDateAndTime}`}</p>
                  }
                  {details.place == null && details.eventDateAndTime != null && details.eventTime != null &&
                    <p className="sub-heading">{` ${details.eventDateAndTime} - ${details.eventTime}`}</p>
                  }
                  {details.place == null && details.eventTime == null &&
                    <p className="sub-heading">{` ${details.eventDateAndTime}`}</p>
                  }
                  {details.place == null && details.eventDateAndTime == null && details.eventTime != null &&
                    <p className="sub-heading">{` ${details.eventTime}`}</p>
                  }
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeInUp" delay={300}>
                  <div className="">
                    <Link to="/contact-us?booking=events" className="btn header-btn">Contact Us</Link>
                  </div>
                </ScrollAnimation>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="layout-home layout-fooddrink event-details">
          <Container>
            <Row className="d-flex justify-content-center">
              <Col lg={12} className="">
                <div className="">
                  <ScrollAnimation animateIn="fadeIn">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: details.body.childMarkdownRemark.html,
                      }}
                    />
                  </ScrollAnimation>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="layout-contact">
          <div className="container-fluid">
            <Row>
              <Col lg={6} md={6} className="contact-bg-lft" style={{ backgroundImage: `url(${contactFormBackground})`, }}>
                <div className="px-5">
                  <h5 className="mb-5">Contact Us</h5>
                  <ContactForm radioSelect="events" />
                </div>
              </Col>
              <Col lg={6} md={6} className="px-0">
                <div className="contact-bg-rht" style={{ backgroundImage: `url(${contactFormBanner})`, }}></div>
              </Col>
            </Row>
          </div>
        </section>

        <Membership />

        <Footer />
      </>
    )
  }
}

export default UpcomingEventsSubPage


export const pageQuery = graphql`
  query EventsBySlug($slug: String!) {

    contentfulEvents(slug: { eq: $slug }) {
          title
    eventName
    place
    eventTime
    seoMetaDescription
    seoMetaKeywords
    seoMetaTitle
    eventDateAndTime(formatString: "dddd D MMMM YYYY")
    banner {
      fluid(quality:100,maxWidth: 1400) {
        base64
        srcWebp
        src
        srcSetWebp
      }
    }
    body {
      childMarkdownRemark {
        html
      }
    }
    }




  contentfulConfiguration {
    contactFormBackground {
      fluid(quality:100) {
        base64
        srcWebp
        src
        srcSetWebp
      }
    }
    contactFormBanner {
      fluid(quality:100) {
        base64
        srcWebp
        src
        srcSetWebp
      }
    }
  }


  
  }
`
