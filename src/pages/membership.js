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
import Contact from '../components/contact';

import BackgroundImage from 'gatsby-background-image'
import ContactForm from '../components/contact-form/ContactForm';

import HeaderNavbar from '../components/header-navbar/HeaderNavbar';
import Header from '../components/header/Header';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import Footer from '../components/footer/Footer';
const logo = require('../assets/img/logo1.svg');

class MembershipPage extends React.Component {
  render() {
    const membership = get(this, 'props.data.allContentfulPages.edges')
    const membershiplist = get(this, 'props.data.allContentfulMembership.edges')
    const PageContent = get(this, 'props.data.contentfulPages.content.childMarkdownRemark.html')

    const ContentBlock = get(this, 'props.data.allContentfulContentBlocks.edges')

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
          <meta property="og:title" content="Membership" />
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
        {membership.map(({ node }) => {
          return (
            <>
              <HeaderNavbar />

              <Header headerBg="" headerImage={node.bannerImage.fluid.src} headerContent={node.bannerContent} buttonName={node.bannerLinkText} buttonLink={node.bannerLink} />

              <Breadcrumb pageName="MEMBERSHIP" />

              <section className="layout-home common">
                <Container>
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
              </section>

              <section className="layout-grid">
                <ScrollAnimation animateIn="fadeIn">
                  {ContentBlock.map(({ node }) => {
                    return (
                      <div className="content-img-rht rhtmember1">
                        <div className="banner-rht" style={{ backgroundImage: `url(${node.image.fluid.src})`, }} />

                        <Container>
                          <Row>
                            <Col lg={6} md={6} className="layout-min-height d-flex align-items-center mt-5">
                              <div className="pr-lg-5 mr-lg-5 content-details">
                                <h2 className="mb-5 custom-heading-line fox-font40">{node.titleToAppearInOtherPages}</h2>

                                <div className="custom-content-line fox-font19 content-border"
                                  dangerouslySetInnerHTML={{
                                    __html: node.contentToAppearInOtherPages.childMarkdownRemark.html,
                                  }}
                                />

                                <Link to={`/${node.shortDescriptionLink}`} className="btn fox-btn mb-5">{node.linkTextToAppearInOtherPages}</Link>

                                <h3 className="mb-4 custom-heading-line fox-font30">Member's Attire</h3>
                                <p className="mb-5 custom-content-line fox-font19">We would appreciate members adhere to a smart casual dress code while at the club.</p>
                              </div>
                            </Col>
                          </Row>
                        </Container>
                      </div>

                    )
                  })}
                </ScrollAnimation>
              </section>

              <section className="layout-bg membership-bg">
                <Container>
                  <Row className="mb-lg-5">

                    {membershiplist.map(function ({ node }, i) {
                      return (
                        <Col lg={6} md={6} className={i % 2 ? 'mb-5 pb-4 pl-lg-4' : 'mb-5 pb-4 pr-lg-4'}>
                          <h2 className="custom-heading-line fox-font40 mb-3">{node.name}</h2>
                          <div className="custom-content-line fox-font19"
                            dangerouslySetInnerHTML={{
                              __html: node.shortDescription.childMarkdownRemark.html,
                            }}
                          />
                          <div className="d-flex justify-content-between">
                            <div>
                              {node.pricing1Title != null &&
                                <p className="fox-heading">{node.pricing1Title}</p>
                              }

                              {node.pricing1Details.childMarkdownRemark.html != null &&
                                <div className="fox-text22 content-blue mb-3 mb-3"
                                  dangerouslySetInnerHTML={{
                                    __html: node.pricing1Details.childMarkdownRemark.html,
                                  }}
                                />
                              }

                            </div>
                            <div className="pr-lg-5">
                              {node.pricing2Title != null &&
                                <p className="fox-heading">{node.pricing2Title}</p>
                              }

                              {node.pricing2Details != null &&
                                <div className="fox-text22 content-blue mb-3"
                                  dangerouslySetInnerHTML={{
                                    __html: node.pricing2Details.childMarkdownRemark.html,
                                  }}
                                />
                              }

                            </div>
                          </div>

                          {node.joiningFee != null &&
                            <p className="text-center fox-textline">+ £{node.joiningFee} Joining fee</p>
                          }

                          <ScrollAnimation animateIn="fadeIn" delay={500}>
                            <div><Link to={`/membership/${node.slug}`} className="read-more mr-4">More Information</Link> <ScrollAnimation animateIn="fadeInLeft" className="fade-inline"><i className="icon icon-red-arrow"></i></ScrollAnimation></div>
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
              <Footer />

            </>
          )
        })}
      </>
    )
  }
}

export default MembershipPage


export const pageQuery = graphql`
  query MembershipPage {
  allContentfulPages(filter: {id: {eq: "3d6d84c2-3600-51d8-b01e-00ca9a5e71d2"}}) {
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

    allContentfulContentBlocks(filter: {id: {eq: "4203de9a-0ee2-5bd7-a37e-c458cb2d4a5b"}}) {
    edges {
      node {
        id
        linkTextToAppearInOtherPages
        titleToAppearInOtherPages
        shortDescriptionLink
        image {
          fluid {
            base64
            srcWebp
            src
            srcSetWebp
          }
        }
        contentToAppearInOtherPages {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }

    allContentfulMembership(sort: {fields: sort}) {
    edges {
      node {
        name
        shortDescription {
          childMarkdownRemark {
            html
          }
        }
        joiningFee
        pricing1Title
        pricing1Details {
        pricing1Details
          childMarkdownRemark {
            html
          }
        }
        pricing2Title
        pricing2Details {
          pricing2Details
          childMarkdownRemark {
            html
          }
        }
        slug
      }
    }
  }

    contentfulPages(id: {eq: "3d6d84c2-3600-51d8-b01e-00ca9a5e71d2"}) {
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
