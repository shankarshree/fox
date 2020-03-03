import React from "react";
import { Link } from "gatsby";
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import '../assets/styles/_index.scss';
import '../assets/styles/_custom.scss';
// import PropTypes from "prop-types"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import Img from "gatsby-image"

import HeaderNavbar from '../components/header-navbar/HeaderNavbar';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
const logo = require('../assets/img/logo1.svg');

class MembershipDetailPage extends React.Component {
  render() {
    const details = get(this.props, 'data.contentfulMembership')

    const pagename = get(this, 'props.data.contentfulMembership.name')

    const seoMetaTitle = get(this, 'props.data.contentfulMembership.seoMetaTitle')
    const seoMetaDescription = get(this, 'props.data.contentfulMembership.seoMetaDescription')
    const seoMetaKeywords = get(this, 'props.data.contentfulMembership.seoMetaKeywords')
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

        <Header headerBg="upcomingeventssub-bg" headerImage={details.bannerImage.fluid.src} headerContent={details.bannerTitle} buttonName="APPLY NOW" buttonLink="/membership/membership-form/" />

        <section className="header-breadcrumb">
          <Container>
            <Row className="d-flex justify-content-center">
              <Col lg={10} className="px-lg-0">
                <ul className="list-inline">
                  <li className="list-inline-item"><Link to="/" className="breadcrumb-link">Home</Link> <i className="icon icon-arrow mx-2"></i></li>
                  <li className="list-inline-item"><Link to="/membership" className="breadcrumb-link">MEMBERSHIP</Link> <i className="icon icon-arrow mx-2"></i></li>
                  <li className="list-inline-item">{pagename}</li>
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
                      __html: details.pageContent.childMarkdownRemark.html,
                    }}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="layout-grid">
          <ScrollAnimation animateIn="fadeIn">
            <div className="content-img-rht rhtmemberdetails1">
              <div className="banner-rht" style={{ backgroundImage: `url(${details.whatsIncludedBanner.fluid.src})`, }} />
              <Container>
                <Row>
                  <Col lg={6} md={6} className="layout-min-height d-flex align-items-center">
                    <div className="pr-lg-5 mr-lg-5 content-details py-0 py-lg-5">
                      <h2 className="mb-5 custom-heading-line fox-font40">What’s included?</h2>

                      <div className="custom-content-line content-border fox-font19"
                        dangerouslySetInnerHTML={{
                          __html: details.whatsIncluded.childMarkdownRemark.html,
                        }}
                      />
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </ScrollAnimation>

          {details.section1Content != null &&

            <ScrollAnimation animateIn="fadeIn">
              <div className="content-img-lht lhtmemberdetails1">
                <div className="banner-lft" style={{ backgroundImage: `url(${details.section1Banner.fluid.src})`, }} />
                <Container>
                  <Row>
                    <Col lg={6} md={6}></Col>
                    <Col lg={6} md={6} className="layout-min-height d-flex align-items-center">
                      <div className="pl-lg-5 ml-lg-5 content-details">

                        <div className="custom-content-line fox-font19"
                          dangerouslySetInnerHTML={{
                            __html: details.section1Content.childMarkdownRemark.html,
                          }}
                        />

                        {details.section1ButtonText != null &&
                          <ScrollAnimation animateIn="fadeIn">
                            <div><Link to="/membership/membership-form/" className="read-more mr-4">{details.section1ButtonText}</Link> <ScrollAnimation animateIn="fadeInLeft" className="fade-inline"><i className="icon icon-red-arrow"></i></ScrollAnimation></div>
                          </ScrollAnimation>
                        }
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </ScrollAnimation>

          }
        </section>

        <section className="layout-contact membership-contact">
          <div className="container-fluid">
            <Row>
              <Col lg={6} md={6} className="contact-bg-lft detail order-md-1 order-2" style={{ backgroundImage: `url(${details.applyForMembershipBackground.fluid.src})`, }}>
                <div className="px-lg-5 px-4">
                  <div className="custom-content-line fox-font19 fox-font600"
                    dangerouslySetInnerHTML={{
                      __html: details.applyForMembershipContent.childMarkdownRemark.html,
                    }}
                  />
                </div>
              </Col>
              <Col lg={6} md={6} className="px-0 order-md-2 order-1">
                <Img className="contact-bg-rht membership-detail" fluid={details.applyForMembershipBannerRight.fluid} />
              </Col>
            </Row>
          </div>
        </section>

        <Footer />
      </>
    )
  }
}

export default MembershipDetailPage


export const pageQuery = graphql`
  query MembershipBySlug($slug: String!) {

  contentfulMembership(slug: { eq: $slug }) {
    name
    bannerTitle
    bannerImage {
      fluid(quality: 100, maxWidth: 1400)  {
        base64
        srcWebp
        src
        srcSetWebp
      }
    }
    pageContent {
      childMarkdownRemark {
        html
      }
    }
    whatsIncluded {
      childMarkdownRemark {
        html
      }
    }
    whatsIncludedBanner {
      fluid(quality: 100, maxWidth: 1000) {
        base64
        srcWebp
        src
        srcSetWebp
      }
    }
    section1Banner {
      fluid(quality: 100, maxWidth: 1000) {
        base64
        srcWebp
        src
        srcSetWebp
      }
    }
    section1Content {
      childMarkdownRemark {
        html
      }
    }
    section1ButtonText
    
    seoMetaDescription
    seoMetaKeywords
    seoMetaTitle
    applyForMembershipBackground {
      fluid {
        src
      }
    }
    applyForMembershipBannerRight {
      fluid(quality:100) {
           ...GatsbyContentfulFluid_withWebp
      }
    }
    applyForMembershipContent {
      childMarkdownRemark {
        html
      }
    }
  }
  }
`
