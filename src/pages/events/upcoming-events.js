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
import Contact from '../../components/contact';

import HeaderNavbar from '../../components/header-navbar/HeaderNavbar';
import Header from '../../components/header/Header';
import Membership from '../../components/membership/Membership';
import Footer from '../../components/footer/Footer';

class UpcomingEventsPage extends React.Component {
  render() {
    const UpcomingEvents = get(this, 'props.data.allContentfulPages.edges')
    const EventsList = get(this, 'props.data.allContentfulEvents.edges')
    const PageContent = get(this, 'props.data.contentfulPages.content.childMarkdownRemark.html')

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
          <meta property="og:title" content="upcoming-events" />
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
        {UpcomingEvents.map(({ node }) => {
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
                        <li className="list-inline-item">UPCOMING EVENTS</li>
                      </ul>
                    </Col>
                  </Row>
                </Container>
              </section>

              <section className="layout-home common layout-fooddrink">
                <Container className="mb-5">
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


                    {EventsList.map(({ node }) => {
                      return (

                        <Col lg={4} md={6} className="mb-5 px-lg-3">
                          <ScrollAnimation animateIn="fadeIn">
                            <div className="card upcoming-events">
                              <Link to={`/events/upcoming-events/${node.slug}`}>
                                <img className="card-img-top img-fluid" title={node.title} alt={node.thumbnail.title} src={node.thumbnail.fluid.src} />
                              </Link>
                              <div className="card-body">
                                <Link to={`/events/upcoming-events/${node.slug}`}>
                                  <h3 className="card-title mb-1">
                                    {node.title}
                                  </h3>
                                </Link>
                                <p className="fox-textline mb-0">{node.eventDateAndTime}</p>
                                {node.eventDateAndTime == null &&

                                <p className="fox-textline mb-0">{node.eventTime}</p>
                                }
                              </div>
                            </div>
                          </ScrollAnimation>
                        </Col>

                      )
                    })}

                  </Row>
                </div>
              </section>

              <Membership />

              <Footer />

            </>
          )
        })
        }
      </>
    )
  }
}

export default UpcomingEventsPage



export const pageQuery = graphql`
  query UpcomingEventsPage {
  allContentfulPages(filter: {id: {eq: "cc9e5bc0-2322-5f2b-8907-e02fff404f57"}}) {
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


    allContentfulEvents(sort: {fields: sort}) {
    edges {
      node {
        eventName
        title
        slug
        eventDateAndTime(formatString: "Do MMMM YYYY")
        eventTime
        thumbnail {
        title
          fluid(maxWidth: 400, resizingBehavior: THUMB) {
            base64
            srcWebp
            src
            srcSetWebp
          }
        }
      }
    }
  }

    contentfulPages(id: {eq: "cc9e5bc0-2322-5f2b-8907-e02fff404f57"}) {
    seoMetaKeywords
    seoMetaTitle
    seometaDescription
    content {
      childMarkdownRemark {
        html
      }
    }
  }
  }
`
