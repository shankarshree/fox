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

import BackgroundImage from 'gatsby-background-image'
import ContactForm from '../components/contact-form/ContactForm';

import HeaderNavbar from '../components/header-navbar/HeaderNavbar';
import Header from '../components/header/Header';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import Membership from '../components/membership/Membership';
import Footer from '../components/footer/Footer';
import Contact from '../components/contact';
const logo = require('../assets/img/logo1.svg');

class FoodAndDrinkPage extends React.Component {
  render() {
    const foodanddrink = get(this, 'props.data.allContentfulPages.edges')
    const PageContent = get(this, 'props.data.contentfulPages.content.childMarkdownRemark.html')

    const list = get(this, 'props.data.allContentfulFoodDrink.edges')

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
          <meta property="og:title" content="Food and Drink" />
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
        {foodanddrink.map(({ node }) => {
          return (
            <>
              <HeaderNavbar />

              <Header headerBg="" headerImage={node.bannerImage.fluid.src} headerContent={node.bannerContent} buttonName={node.bannerLinkText} buttonLink={node.bannerLink} />

              <Breadcrumb pageName="FOOD & DRINK" />

              <section className="layout-home layout-fooddrink">
                <Container className="mb-5 pb-5">
                  <Row className="d-flex justify-content-center">
                    <Col lg={10} className="px-lg-5">
                      <div className="">
                        <h3 className="mb-0 custom-heading-line fox-font30"
                          dangerouslySetInnerHTML={{
                            __html: PageContent,
                          }}
                        />
                      </div>
                    </Col>
                  </Row>
                </Container>

                <div className="container-fluid">
                  <Row className="px-lg-5">
                    <Col lg={12}>
                      <ScrollAnimation animateIn="fadeIn">
                        <Row>

                          {list.map(({ node }, i) => {
                            return (
                              <Col lg={4} md={4} className="mb-5 card-deck mx-0 px-md-0 px-lg-1 food-and-drink-list">
                                {node.slug != 'drinks-list' &&

                                  <div className="card">
                                    <Link to={`/food-and-drink/${node.slug}`}>
                                      <img className="card-img-top img-fluid" title={node.name} alt={node.thumbnail.title} src={node.thumbnail.fluid.src} />
                                    </Link>
                                    <div className="card-body">
                                      <h3 className="card-title mb-0">
                                        <Link to={`/food-and-drink/${node.slug}`}>
                                          {node.name}
                                        </Link>
                                      </h3>
                                    </div>
                                  </div>
                                }
                                {node.slug == 'drinks-list' &&
                                  <div className="card">
                                    <Link to="food-and-drink/drinks-list">
                                      <img className="card-img-top img-fluid" title={node.name} alt={node.thumbnail.title} src={node.thumbnail.fluid.src} />
                                    </Link>
                                    <div className="card-body">
                                      <h3 className="card-title mb-0">
                                        <Link to="food-and-drink/drinks-list">
                                          {node.name}
                                        </Link>
                                      </h3>
                                    </div>
                                  </div>
                                }
                              </Col>
                            )
                          })}
                        </Row>
                      </ScrollAnimation>

                    </Col>
                  </Row>
                </div>
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

export default FoodAndDrinkPage


export const pageQuery = graphql`
  query FoodAndDrinkPage {
  allContentfulPages(filter: {id: {eq: "23d4addb-c4ec-570a-b429-d1086279f813"}}) {
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

  allContentfulFoodDrink(sort: {fields: sort}) {
    edges {
      node {
        thumbnail {
        title
          fluid(quality: 100) {
            base64
            srcWebp
            src
            srcSetWebp
          }
        }
        slug
        name
      }
    }
  }

    contentfulPages(id: {eq: "23d4addb-c4ec-570a-b429-d1086279f813"}) {
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
