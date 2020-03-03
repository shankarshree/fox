import React from "react";
import '../../assets/styles/_index.scss';
import '../../assets/styles/_custom.scss';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import HeaderNavbar from '../../components/header-navbar/HeaderNavbar';
import MultiForm from '../../components/multi-form/MultiFormNew';
import Footer from '../../components/footer/Footer';
const logo = require('../../assets/img/logo1.svg');

class MembershipformPage extends React.Component {
  render() {
    const CookiePolicyPage = get(this, 'props.data.allContentfulPages.edges')

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
          <meta property="og:title" content="Mermbership Form" />
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

        <section className="layout-findus contactus">
            <div className="find-form">
                <div className="container-fluid">
                    <Row className="mb-4 px-lg-5">
                        <Col lg={12}>
                            <ScrollAnimation animateIn="fadeInUp">
                                <h1>Apply for Membership</h1>
                            </ScrollAnimation>
                        </Col>
                    </Row>

                    <Row className="px-lg-5">
                        <Col lg={12} className="mb-5">
                            <div className="form membership-form py-5">
                                <MultiForm />
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </section>

        <Footer />

            </>
    )
  }
}

export default MembershipformPage

export const pageQuery = graphql`
  query MembershipformPage {
  allContentfulPages(filter: {id: {eq: "1f52096c-cec1-5ee9-ac3e-05c8d38d83f6"}}) {
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

    contentfulPages(id: {eq: "1f52096c-cec1-5ee9-ac3e-05c8d38d83f6"}) {
    seoMetaKeywords
    seoMetaTitle
    seometaDescription
  }
  }
`