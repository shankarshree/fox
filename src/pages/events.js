import React from "react";
import { Link } from "gatsby";
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import '../assets/styles/_index.scss';
import '../assets/styles/_custom.scss';
import Img from "gatsby-image"

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
import Contact from '../components/contact';
import Membership from '../components/membership/Membership';
import Footer from '../components/footer/Footer';
const logo = require('../assets/img/logo1.svg');

class EventsPage extends React.Component {
  render() {
    const eventspage = get(this, 'props.data.allContentfulPages.edges')
    const PageContent = get(this, 'props.data.contentfulPages.content.childMarkdownRemark.html')
    const contentBlocks = get(this, 'props.data.contentfulPages.contentBlocks')
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
          <meta property="og:title" content="Events" />
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
        {eventspage.map(({ node }) => {
          return (
            <>
              <HeaderNavbar />


              <Header headerBg="" headerImage={node.bannerImage.fluid.src} headerContent={node.bannerContent} buttonName={node.bannerLinkText} buttonLink={node.bannerLink} />

              <Breadcrumb pageName="EVENTS / MEETINGS" />

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
                {contentBlocks.map((contentBlocks, i) => {
                  return (

                    <ScrollAnimation animateIn="fadeIn">
                      {
                        i % 2 ?
                          <div className={"content-img-rht " + contentBlocks.id}>

                            <div className="banner-rht" style={{ backgroundImage: `url(${contentBlocks.image.fluid.src})`, }} />

                            <Container>
                              <Row>
                                <Col lg={6} md={6} className="layout-min-height d-flex align-items-center">
                                  <div className="pr-lg-4 mr-lg-5 content-details">
                                    <h2 className="mb-4 custom-heading-line fox-font40">{contentBlocks.titleToAppearInOtherPages}</h2>

                                    <div className="mb-5 custom-content-line fox-font19"
                                      dangerouslySetInnerHTML={{
                                        __html: contentBlocks.contentToAppearInOtherPages.childMarkdownRemark.html,
                                      }}
                                    />

                                    <ScrollAnimation animateIn="fadeIn">
                                      <div>


                                      {contentBlocks.shortDescriptionLinkMail == null &&

                                      <Link to={`/${contentBlocks.shortDescriptionLink}`} className="read-more mr-4">{contentBlocks.linkTextToAppearInOtherPages}</Link>
                                      }

                                      {contentBlocks.shortDescriptionLink == null &&

                                      <a href={`mailto:${contentBlocks.shortDescriptionLinkMail}`} className="read-more mr-4">{contentBlocks.linkTextToAppearInOtherPages}</a>
                                      }


                                       <ScrollAnimation animateIn="fadeInLeft" className="fade-inline"><i className="icon icon-red-arrow"></i></ScrollAnimation></div>
                                    </ScrollAnimation>
                                  </div>
                                </Col>
                              </Row>
                            </Container>
                          </div>
                          :

                          <div className={"content-img-lht " + contentBlocks.id}>

                            <div className="banner-lft" style={{ backgroundImage: `url(${contentBlocks.image.fluid.src})`, }} />

                            <Container>
                              <Row>
                                <Col lg={6} md={6}></Col>
                                <Col lg={6} md={6} className="layout-min-height d-flex align-items-center">
                                  <div className="pl-lg-4 ml-lg-5 content-details">
                                    <h2 className="mb-4 custom-heading-line fox-font40">{contentBlocks.titleToAppearInOtherPages}</h2>

                                    <div className="mb-5 custom-content-line fox-font19"
                                      dangerouslySetInnerHTML={{
                                        __html: contentBlocks.contentToAppearInOtherPages.childMarkdownRemark.html,
                                      }}
                                    />

                                    <ScrollAnimation animateIn="fadeIn">
                                      <div>
                                      {contentBlocks.shortDescriptionLinkMail == null &&

                                      <Link to={`/${contentBlocks.shortDescriptionLink}`} className="read-more mr-4">{contentBlocks.linkTextToAppearInOtherPages}</Link>
                                      }

                                      {contentBlocks.shortDescriptionLink == null &&

                                      <a href={`mailto:${contentBlocks.shortDescriptionLinkMail}`} className="read-more mr-4">{contentBlocks.linkTextToAppearInOtherPages}</a>

                                      }

                                       <ScrollAnimation animateIn="fadeInLeft" className="fade-inline"><i className="icon icon-red-arrow"></i></ScrollAnimation></div>
                                    </ScrollAnimation>
                                  </div>
                                </Col>
                              </Row>
                            </Container>
                          </div>
                      }
                    </ScrollAnimation>
                  )
                })}

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
                              <ContactForm radioSelect="events" />
                            </div>
                          </BackgroundImage>

                        </Col>
                        <Col lg={6} md={6} className="px-0">
                          <Img className="contact-bg-rht room-detail" fluid={contactFormBanner.fluid} />

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


export default EventsPage

export const pageQuery = graphql`
  query EventsPageQuery {
  allContentfulPages(filter: {id: {eq: "adc1a105-7240-5457-9573-d055015dd278"}}) {
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


    contentfulPages(id: {eq: "adc1a105-7240-5457-9573-d055015dd278"}) {
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
        contentBlocks {
        id
        linkTextToAppearInOtherPages
        titleToAppearInOtherPages
        shortDescriptionLink
        shortDescriptionLinkMail
        image {
          fluid(quality:100) {
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
`
