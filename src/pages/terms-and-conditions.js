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

import BackgroundImage from 'gatsby-background-image'
import ContactForm from '../components/contact-form/ContactForm';
import Contact from '../components/contact';

import HeaderNavbar from '../components/header-navbar/HeaderNavbar';
import Header from '../components/header/Header';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import Membership from '../components/membership/Membership';
import Footer from '../components/footer/Footer';
const logo = require('../assets/img/logo1.svg');

class TermsPolicyPage extends React.Component {
  render() {
    const TermsPolicyPage = get(this, 'props.data.allContentfulPages.edges')

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
          <meta property="og:title" content="Terms and Conditions" />
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
        {TermsPolicyPage.map(({ node }) => {
          return (
            <>
              <HeaderNavbar />

              <Header headerBg="" headerImage={node.bannerImage.fluid.src} headerContent={node.bannerContent} buttonName={node.bannerLinkText} buttonLink={node.bannerLink} />

              <Breadcrumb pageName="TERMS & CONDITIONS" />

              <section className="layout-home">
                <Container>
                  <Row className="d-flex justify-content-center">
                    <Col lg={10} className="">

                          {node.content != null &&
<h3><div className="mb-5 custom-heading-line fox-font30"
                                      dangerouslySetInnerHTML={{
                                        __html: node.content.childMarkdownRemark.html,
                                      }}
                                    /></h3>

                          }
                                    <div className="mb-5 custom-content-line fox-font19"
                                      dangerouslySetInnerHTML={{
                                        __html: node.pageContent.childMarkdownRemark.html,
                                      }}
                                    />
                    </Col>
                  </Row>
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

export default TermsPolicyPage

export const pageQuery = graphql`
  query TermsPolicyPage {
  allContentfulPages(filter: {id: {eq: "3419c1c4-c0c3-5628-8e6c-c9753a8a2b1e"}}) {
    edges {
      node {
        bannerContent
        bannerLink
        bannerLinkText
        id
        content {
          childMarkdownRemark {
            html
          }
        }
        pageContent {
          childMarkdownRemark {
            html
          }
        }
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
  
    contentfulPages(id: {eq: "3419c1c4-c0c3-5628-8e6c-c9753a8a2b1e"}) {
    seoMetaKeywords
    seoMetaTitle
    seometaDescription
        contactForm
    contactBannerRight {
      fluid(quality: 90, maxWidth: 1500) {
           ...GatsbyContentfulFluid_withWebp
      }
    }
  }
  }
`