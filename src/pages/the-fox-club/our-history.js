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
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import Contact from '../../components/contact';
import $ from 'jquery';

import BackgroundImage from 'gatsby-background-image'
import ContactForm from '../../components/contact-form/ContactForm';

import HeaderNavbar from '../../components/header-navbar/HeaderNavbar';
import Header from '../../components/header/Header';
import Membership from '../../components/membership/Membership';
import Footer from '../../components/footer/Footer';

const historyFox = require('../../assets/img/history-fox.jpg');
const logo = require('../../assets/img/logo1.svg');

class OurHistoryPage extends React.Component {
  componentDidMount() {
    $('.icon-circle.first').last().removeClass('first').addClass('third');
    $('.icon-circle').last().removeClass('second').addClass('history-end');
  }
  render() {
    const thefoxclub = get(this, 'props.data.allContentfulPages.edges')
    const PageContent = get(this, 'props.data.contentfulPages.content.childMarkdownRemark.html')

    const History = get(this, 'props.data.allContentfulOurHistory.edges')

    const contactForm = get(this, 'props.data.contentfulPages.contactForm')
    const contactFormBanner = get(this, 'props.data.contentfulPages.contactBannerRight')
    const contactFormBackground = get(this, 'props.data.contentfulConfiguration.contactFormBackground')

    const seoMetaTitle = get(this, 'props.data.contentfulPages.seoMetaTitle')
    const seometaDescription = get(this, 'props.data.contentfulPages.seometaDescription')
    const seoMetaKeywords = get(this, 'props.data.contentfulPages.seoMetaKeywords')
    const url = typeof window !== 'undefined' ? window.location.href : ''

    return (
      <>
        <Helmet>
          <title>{seoMetaTitle}</title>
          <meta name="description" content={seometaDescription} />
          <meta name="keywords" content={seoMetaKeywords} />
          <link rel="canonical" href={url} />
          <meta property="og:site_name" content="thefoxclub" />
          <meta property="og:url" content={url} />
          <meta property="og:title" content="Our History" />
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
        {thefoxclub.map(({ node }) => {
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
                        <li className="list-inline-item"><Link to="/the-fox-club" className="breadcrumb-link">THE FOX CLUB</Link> <i className="icon icon-arrow mx-2"></i></li>
                        <li className="list-inline-item">OUR HISTORY</li>
                      </ul>
                    </Col>
                  </Row>
                </Container>
              </section>

              <section className="layout-home history">
                <Container>
                  <Row className="mb-md-5 pb-md-5 mb-0 pb-0">
                    <Col lg={6} md={6} className="mb-5">
                      <h3 className="mb-0 custom-heading-line fox-font30"
                        dangerouslySetInnerHTML={{
                          __html: PageContent,
                        }}
                      />
                    </Col>
                    <Col lg={1} className="d-lg-block d-md-none"></Col>
                    <Col lg={4} md={6} className="">
                      <ScrollAnimation animateIn="fadeIn">
                        <img src={historyFox} className="img-fluid" alt="The Fox Club History" />
                      </ScrollAnimation>
                    </Col>
                  </Row>

                  {History.map(({ node }, i) => {
                    return (
                      <>
                        {
                          i % 2 ?

                            <Row>
                              <Col lg={6} md={6} className="text-md-right text-left mt-md-5 pt-md-5 mt-0 pt-0 mb-lg-0 mb-5 pr-lg-5">
                                <Link to="/" className="content-link our-history">{node.year}</Link>

                                {node.thumbnail != null &&
                                  <img src={node.thumbnail.fluid.src} className="img-fluid mt-4 history-img" alt={node.thumbnail.title} />
                                }
                              </Col>
                              <Col lg={1} md={1} className="d-flex justify-content-center mt-3 d-md-block d-none">
                                <div className="history-line second icon-circle mt-5 d-md-block d-none"></div>
                              </Col>
                              <Col lg={5} md={5} className="mt-md-5 pt-md-3">
                                <h4 className="custom-heading-line fox-font24 mb-4 px-md-4">{node.title}</h4>
                                <div className="custom-content-line fox-font19 pl-md-4"
                                  dangerouslySetInnerHTML={{
                                    __html: node.content.childMarkdownRemark.html,
                                  }}
                                />
                              </Col>
                            </Row>

                            :

                            <Row className="mb-5">
                              <Col lg={6} md={6} className="order-md-1 order-2 pr-lg-5">
                                <h4 className="custom-heading-line fox-font24 mb-4">{node.title}</h4>

                                <div className="custom-content-line fox-font19 px-0"
                                  dangerouslySetInnerHTML={{
                                    __html: node.content.childMarkdownRemark.html,
                                  }}
                                />
                              </Col>
                              <Col lg={1} md={1} className="d-flex justify-content-center mt-3 d-md-block d-none order-md-2">
                                <div className="history-line first icon-circle mt-5 d-md-block d-none"></div>
                              </Col>
                              <Col lg={5} md={5} className="mt-5 pt-3 order-md-3 order-1 mb-lg-0 mb-5">
                                <Link to="/" className="content-link our-history mb-lg-0 mb-lg-5 d-block">{node.year}</Link>

                                {node.thumbnail != null &&
                                  <img src={node.thumbnail.fluid.src} className="img-fluid mt-4"  alt={node.thumbnail.title} />
                                }
                              </Col>
                            </Row>

                        }

                      </>
                    )
                  })}

                </Container>
              </section>

              {contactForm === true &&
                <>
                  {contactFormBanner != null &&
                    <section className="layout-contact">
                      <div className="container-fluid">
                        <Row>

                          <Col lg={6} md={6} className="px-0">
                            <BackgroundImage
                              Tag="section"
                              className="contact-bg-lft"
                              fluid={contactFormBackground.fluid}
                            >
                              <div className="px-5">
                                <h5 className="mb-5">Contact Us</h5>
                                <ContactForm radioSelect="rooms" />
                              </div>
                            </BackgroundImage>

                          </Col>
                          <Col lg={6} md={6} className="px-0">
                            <BackgroundImage
                              Tag="section"
                              className="contact-bg-rht"
                              fluid={contactFormBanner.fluid}
                            >
                            </BackgroundImage>
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

export default OurHistoryPage



export const pageQuery = graphql`
  query OurHistoryPage {
  allContentfulPages(filter: {id: {eq: "16ad8ffe-0f56-56b5-b368-83f66c3a9c51"}}) {
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
      fluid(quality: 90) {
           ...GatsbyContentfulFluid_withWebp
      }
    }
  }
  allContentfulOurHistory(sort: {fields: sort}) {
    edges {
      node {
        title
        sort
        year
        content {
          childMarkdownRemark {
            html
          }
        }
        thumbnail {
          fluid {
            base64
            srcWebp
            src
            srcSetWebp
          }
          title
        }
      }
    }
  }

    contentfulPages(id: {eq: "16ad8ffe-0f56-56b5-b368-83f66c3a9c51"}) {
    seoMetaKeywords
    seoMetaTitle
    seometaDescription
    contactForm
    contactBannerRight {
      fluid(quality: 90, maxWidth: 1500) {
           ...GatsbyContentfulFluid_withWebp
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
