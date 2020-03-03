import React from "react";
import { Link } from "gatsby";
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import '../../assets/styles/_index.scss';
import '../../assets/styles/_custom.scss';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import $ from 'jquery';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

import BackgroundImage from 'gatsby-background-image'
import Contact from '../../components/contact';

import HeaderNavbar from '../../components/header-navbar/HeaderNavbar';
import Header from '../../components/header/Header';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import ContactForm from '../../components/contact-form/ContactForm';
import Membership from '../../components/membership/Membership';
import Footer from '../../components/footer/Footer';

class HostYourOwnEventsPage extends React.Component {
  componentDidMount() {
    $(".viewevent").click(function () {
      $('html, body').animate({
        scrollTop: $("#contact-event").offset().top
      }, 800);
    });
  }

  render() {
    const HostEvents = get(this, 'props.data.allContentfulPages.edges')
    const EventsList = get(this, 'props.data.allContentfulHostYourOwnEvents.edges')

    const contactForm = get(this, 'props.data.contentfulPages.contactForm')
    const contactFormBanner = get(this, 'props.data.contentfulPages.contactBannerRight')
    const contactFormBackground = get(this, 'props.data.contentfulConfiguration.contactFormBackground')

    const seoMetaTitle = get(this, 'props.data.contentfulPages.seoMetaTitle')
    const seometaDescription = get(this, 'props.data.contentfulPages.seometaDescription')
    const seoMetaKeywords = get(this, 'props.data.contentfulPages.seoMetaKeywords')
    const url = typeof window !== 'undefined' ? window.location.href : ''
    const PageContent = get(this, 'props.data.contentfulPages.content.childMarkdownRemark.html')

    return (
      <>
        <Helmet>
          <title>{seoMetaTitle}</title>
          <meta name="description" content={seometaDescription} />
          <meta name="keywords" content={seoMetaKeywords} />
          <link rel="canonical" href={url} />
          <meta property="og:site_name" content="thefoxclub" />
          <meta property="og:url" content={url} />
          <meta property="og:title" content="host-your-own-events" />
          <meta property="og:type" content="article" />
          <meta property="og:description" content="thefoxclub" />
          <script type="application/ld+json">
            {`{
              "@context": "http://schema.org",
              "@type": "Organization",
              "name": "thefoxclub",
              "sameAs": [],
              "url": "${url}",
              "logo": "https://www.foxclublondon.com/static/logo1-cec567863d62b11bcf0801ae305ebd62.svg"
            }`}
          </script>
        </Helmet>
        {HostEvents.map(({ node }) => {
          return (
            <>
              <HeaderNavbar />

              <Header headerBg="" headerImage={node.bannerImage.fluid.src} headerContent={node.bannerContent} buttonName={node.bannerLinkText} buttonLink={node.bannerLink} />

              <section className="header-breadcrumb">
                <Container>
                  <Row className="d-flex justify-content-center">
                    <Col lg={10} className="px-lg-0">
                      <ul className="list-inline">
                        <li className="list-inline-item"><Link to="/" className="breadcrumb-link">Home</Link> <i className="icon icon-arrow mx-2"></i></li>
                        <li className="list-inline-item"><Link to="/events" className="breadcrumb-link">EVENTS / MEETINGS</Link> <i className="icon icon-arrow mx-2"></i></li>
                        <li className="list-inline-item">HOST YOUR OWN EVENTS</li>
                      </ul>
                    </Col>
                  </Row>
                </Container>
              </section>

              <section className="layout-home layout-fooddrink">
                <Container className="mb-5 pb-5">
                  <Row className="d-flex justify-content-center">
                    <Col lg={10} className="px-lg-5">
                      <div className="">
                        <h3 className="mb-0 custom-heading-line fox-font30">Planning a special family party or celebrating with business colleagues or friends? We create memorable bespoke events, from formal dinners to relaxed drinks functions.</h3>
                      </div>
                    </Col>
                  </Row>
                </Container>

                <Container>
                  <Row>

                    {EventsList.map(({ node }) => {
                      return (

                        <Col lg={4} md={6} className="mb-5">
                          <ScrollAnimation animateIn="fadeIn">
                            <div className="card own-events upcoming-events">
                            {node.link == '#contact-event' ? 
                            <>
                              <a href="#contact-event" className="viewevent">
                                <img className="card-img-top img-fluid" title={node.title} alt={node.thumbNail.title} src={node.thumbNail.fluid.src} />
                                <div className="card-body">
                                  <h3 className="card-title mb-0">
                                    {node.title}
                                  </h3>
                                </div>
                              </a></> 
                            : 
                            <>
                              <Link to={`${node.link}`}>
                                <img className="card-img-top img-fluid" title={node.title} alt={node.thumbNail.title} src={node.thumbNail.fluid.src} />
                                <div className="card-body">
                                  <h3 className="card-title mb-0">
                                    {node.title}
                                  </h3>
                                </div>
                              </Link></> 
                            }
                            </div>
                          </ScrollAnimation>
                        </Col>

                      )
                    })}


                  </Row>
                </Container>
              </section>


              {contactForm === true &&
              <>
                {contactFormBanner != null &&
                  <section className="layout-contact" id="contact-event">
                    <div className="container-fluid">
                        <Row>
                            <Col lg={6} md={6} className="contact-bg-lft" style={{ backgroundImage: `url(${contactFormBackground.fluid.src})`, }}>
                                <div className="px-5">
                                    <h5 className="mb-5">Contact Us</h5>
                                    <ContactForm radioSelect="events" />
                                </div>
                            </Col>
                            <Col lg={6} md={6} className="px-0">
                                <ScrollAnimation animateIn="fadeIn" className="contact-bg-rht" style={{ backgroundImage: `url(${contactFormBanner.fluid.src})`, }}>
                                </ScrollAnimation>
                            </Col>
                        </Row>
                    </div>
                </section>
                }
                {contactFormBanner === null &&
                  <Contact />
                }
                </>
                }
              <Membership />

              <Footer />

            </>
          )
        })}
      </>
    )
  }
}


export default HostYourOwnEventsPage



export const pageQuery = graphql`
  query HostYourOwnEventsPage {
  allContentfulPages(filter: {id: {eq: "c8ccc2b8-2320-598e-a9a3-5ccb0b2eeed8"}}) {
    edges {
      node {
        bannerContent
        bannerLink
        bannerLinkText
        id
        bannerImage {
          fluid( quality: 100, maxWidth: 1500) {
            base64
            srcWebp
            src
            aspectRatio
            srcSetWebp
          }
        }
        
      }
    }
  }


  
  contentfulConfiguration {
    contactFormBackground {
      fluid(quality: 100) {
           src
      }
    }
  }

  allContentfulHostYourOwnEvents(sort: {fields: sort}) {
    edges {
      node {
        title
        link
        sort
        thumbNail {
        title
          fluid {
            base64
            srcWebp
            src
            srcSetWebp
          }
        }
      }
    }
  }

    contentfulPages(id: {eq: "c8ccc2b8-2320-598e-a9a3-5ccb0b2eeed8"}) {
    seoMetaKeywords
    seoMetaTitle
    seometaDescription
        contactForm
    contactBannerRight {
      fluid(quality: 90, maxWidth: 1500) {
           src
      }
    }
    content {
      childMarkdownRemark {
        html
      }
    }
  }
  }
`