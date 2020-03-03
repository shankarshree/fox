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

import BackgroundImage from 'gatsby-background-image'
import ContactForm from '../../components/contact-form/ContactForm';

import HeaderNavbar from '../../components/header-navbar/HeaderNavbar';
import Header from '../../components/header/Header';
import Membership from '../../components/membership/Membership';
import Footer from '../../components/footer/Footer';
import Contact from '../../components/contact';
import AreaGuideSection1 from '../../components/area-guide-section-2';
const foxicon = require('../../assets/img/foxicon.svg');
const logo = require('../../assets/img/logo1.svg');


class AreaguidePage extends React.Component {
  render() {
    const thefoxclub = get(this, 'props.data.allContentfulPages.edges')
    const intro = get(this, 'props.data.allContentfulContentBlocks.edges')
    const PageContent = get(this, 'props.data.contentfulPages.content.childMarkdownRemark.html')

    const AreaGuide = get(this, 'props.data.allContentfulAreaGuide.edges')
    const image = get(this, 'props.data.allContentfulAreaGuide.edges.node.images')

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
          <meta property="og:title" content="Mayfair area guide" />
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
                        <li className="list-inline-item">AREA GUIDE</li>
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
                            __html: PageContent,
                          }}
                        />
                      </div>
                    </Col>
                  </Row>
                </Container>
              </section>



              {intro.map(({ node }, i) => {
                return (
                  <section className="layout-grid">
                    <ScrollAnimation animateIn="fadeIn">
                      <div className="content-img-lht lhtareaguide1">
                        <div className="banner-lft" style={{ backgroundImage: `url(${node.image.fluid.src})`, }} />
                        <Container>
                          <Row>
                            <Col lg={6} md={6}></Col>
                            <Col lg={6} md={6} className="layout-min-height d-flex align-items-center">
                              <ScrollAnimation animateIn="fadeInRight">
                                <div className="pl-lg-4 ml-lg-5 content-details">
                                  <h2 className="mb-4 custom-heading-line fox-font40">{node.titleToAppearInOtherPages}</h2>
                                  <div className="mb-5 custom-content-line fox-font19"
                                    dangerouslySetInnerHTML={{
                                      __html: node.contentToAppearInOtherPages.childMarkdownRemark.html,
                                    }}
                                  />
                                </div>
                              </ScrollAnimation>
                            </Col>
                          </Row>
                        </Container>
                      </div>
                    </ScrollAnimation>
                  </section>
                )
              })}


              <section className="layout-home">

                {AreaGuide.map(({ node }, i) => {
                  return (
                    <>

                      <Container>

                        <Row className="d-flex justify-content-center mb-5">
                          <Col lg={10} className="px-lg-2">
                            <p className="fox-small-bold fox-font19 mb-3">{node.title}</p>
                            <div className="custom-content-line fox-font19"
                              dangerouslySetInnerHTML={{
                                __html: node.content.childMarkdownRemark.html,
                              }}
                            />
                            <a href={`http://${node.link}`} target="_blank" className="read-more areaguide" rel="noopener noreferrer">{node.link}</a>
                          </Col>
                        </Row>

                        <Row className="d-flex justify-content-center">
                          <Col lg={10}>
                            {node.images != null &&

                              <>
                                <Row className="mb-4">

                                  <>
                                    {node.images.length >= 3 &&
                                      <>


                                        {node.images.map((image, i) => {

                                          return (

                                            <>
                                              <Col lg={4} md={4} className="px-lg-2">
                                                <figure className="areaguide-img" style={{ backgroundImage: `url(${image.file.url})`, }}>
                                                  {/* <img src={image.file.url} className="img-fluid mb-0" alt="" /> */}
                                                </figure>
                                              </Col>
                                            </>


                                          )
                                        })}
                                      </>
                                    }

                                    {node.images.length === 2 &&
                                      <>

                                        {node.images.map((image, i) => {

                                          return (

                                            <>
                                              <Col lg={6} md={6} className="px-lg-2">
                                                <figure className="areaguide-img" style={{ backgroundImage: `url(${image.file.url})`, }}>
                                                  {/* <img src={image.file.url} className="img-fluid mb-0" alt="" /> */}
                                                </figure>
                                              </Col>
                                            </>

                                          )
                                        })}
                                      </>
                                    }


                                    {node.images.length === 1 &&
                                      <>

                                        {node.images.map((image, i) => {

                                          return (

                                            <>
                                              <Col lg={12} md={12} className="px-lg-2">
                                                <figure className="areaguide-img" style={{ backgroundImage: `url(${image.file.url})`, }}>
                                                  {/* <img src={image.file.url} className="img-fluid mb-0" alt="" /> */}
                                                </figure>
                                              </Col>
                                            </>


                                          )
                                        })}
                                      </>
                                    }


                                  </>


                                </Row>
                              </>

                            }

                          </Col>
                        </Row>

                      </Container>
                    </>
                  )
                })}

                <Container>

                  <ScrollAnimation animateIn="fadeIn">
                    <Row className="d-flex justify-content-center">
                      <Col lg={11}>
                        <div className="fox-area-border py-2">
                          <div className="ml-4">
                            <img src={foxicon} className="img-fluid" alt="" />
                            <p>“Talk to our Concierge Services team at the Fox Club and tap into our local knowledge of the area. We would be delighted to share what “Locals know best”!</p>
                            <a href="mailto:info@foxclublondon.com" className="read-more areaguide">info@foxclublondon.com</a>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </ScrollAnimation>
                </Container>
              </section>

              <AreaGuideSection1 />

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

export default AreaguidePage

export const pageQuery = graphql`
  query AreaguidePage {
  allContentfulPages(filter: {id: {eq: "92cf7d6e-2dec-5ace-b633-fb7489d74cce"}}) {
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

  allContentfulAreaGuide(sort: {fields: sort}) {
    edges {
      node {
        title
        link
        images {
          file {
            url
          }
          id
        }
        content {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }


    contentfulPages(id: {eq: "92cf7d6e-2dec-5ace-b633-fb7489d74cce"}) {
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



  allContentfulContentBlocks(filter: {id: {eq: "779d8de8-3906-58df-a3f2-3f7e331dc735"}}) {
    edges {
      node {
        shortDescriptionLink
        titleToAppearInOtherPages
        linkTextToAppearInOtherPages
        contentToAppearInOtherPages {
          childMarkdownRemark {
            html
          }
        }
        image {
          fluid {
            base64
            srcWebp
            src
            srcSetWebp
          }
        }
        id
      }
    }
  }

  }
`
