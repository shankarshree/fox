import React from "react";
import { Link } from "gatsby";
import { graphql } from 'gatsby';
import get from 'lodash/get';
import '../assets/styles/_index.scss';
import '../assets/styles/_custom.scss';
import Helmet from 'react-helmet'

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

class SitemapPage extends React.Component {
    render() {
        const sitemap = get(this, 'props.data.allContentfulPages.edges')
        const foodanddrink = get(this, 'props.data.allContentfulFoodDrink.edges')
        const membership = get(this, 'props.data.allContentfulMembership.edges')
        const rooms = get(this, 'props.data.allContentfulRooms.edges')
        const events = get(this, 'props.data.allContentfulEvents.edges')

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
          <meta property="og:title" content="Sitemap" />
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

                {sitemap.map(({ node }) => {
                    return (
                        <>
                            <HeaderNavbar />

                            <Header headerBg="" headerImage={node.bannerImage.fluid.src} headerContent={node.bannerContent} buttonName={node.bannerLinkText} buttonLink={node.bannerLink} />

                            <Breadcrumb pageName="SITEMAP" />

                            <section className="layout-home sitemap">
                                <Container>
                                    <Row className="px-lg-5 mx-lg-2">
                                        <Col lg={6} md={6}>
                                            <ul>
                                                <li><Link to="/">Home</Link></li>

                                                <li><Link to="/the-fox-club">The Fox Club</Link>
                                                    <ul className="pl-3">
                                                        <li to="/the-fox-club/our-history"><Link>Our History</Link></li>
                                                        <li><Link to="/the-fox-club/area-guide">Area Guide</Link></li>
                                                    </ul>
                                                </li>

                                                <li><Link to="/food-and-drink">Food And Drink</Link>
                                                    <ul className="pl-3">
                                                      {foodanddrink.map(({ node }, i) => {
                                                        return (
                                                                                    <li>
                                                                {node.slug != 'drinks-list' &&
                                                                  <Link to={`/food-and-drink/${node.slug}`}>{node.name}</Link>
                                                                }
                                                                {node.slug == 'drinks-list' &&
                                                                  <Link to="food-and-drink/drinks-list">{node.name}</Link>
                                                                }</li>
                                                        )
                                                      })}
                                                    </ul>
                                                </li>
                                                <li><Link to="/membership">Membership</Link>
                                                    <ul className="pl-3">
                                                      {membership.map(({ node }, i) => {
                                                        return (
                                                                                    <li>
                                                                  <Link to={`/membership/${node.slug}`}>{node.name}</Link></li>
                                                        )
                                                      })}
                                                    </ul>
                                                </li>
                                            </ul>
                                        </Col>
                                        <Col lg={6} md={6}>
                                            <ul>
                                                <li><Link to="/rooms">Rooms</Link>
                                                    <ul className="pl-3">
                                                      {rooms.map(({ node }, i) => {
                                                        return (
                                                                                    <li>
                                                                  <Link to={`/rooms/${node.slug}`}>{node.roomName}</Link></li>
                                                        )
                                                      })}
                                                    </ul>
                                                </li>
                                                <li><Link to="/events">Events</Link>
                                                    <ul className="pl-3">
                                                        <li><Link to="/events/upcoming-events">Upcoming Events</Link>
                                                            <ul className="pl-3">
                                                      {events.map(({ node }, i) => {
                                                        return (
                                                                                    <li>
                                                                  <Link to={`/events/upcoming-events/${node.slug}`}>{node.title}</Link></li>
                                                        )
                                                      })}
                                                            </ul>
                                                        </li>
                                                        <li><Link to="/events/host-your-own-events">Host Your Own Events</Link></li>
                                                    </ul>
                                                </li>

                                                <li><Link to="/gallery">Gallery</Link></li>
                                                <li><Link to="/find-us">Find Us</Link></li>
                                                <li><Link to="/contact-us">Contact Us</Link></li>
                                                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                                                <li><Link to="/cookie-policy">Cookie Policy</Link></li>
                                                <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
                                            </ul>
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

export default SitemapPage


export const pageQuery = graphql`
  query SitemapPage {
  allContentfulPages(filter: {id: {eq: "b4128048-8fef-5828-b561-e744276bcc0a"}}) {
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

    contentfulPages(id: {eq: "b4128048-8fef-5828-b561-e744276bcc0a"}) {
    seoMetaKeywords
    seoMetaTitle
    seometaDescription
        contactForm
    contactBannerRight {
      fluid(quality: 90, maxWidth: 1500) {
           ...GatsbyContentfulFluid_tracedSVG
      }
    }
  }


  
  contentfulConfiguration {
    contactFormBackground {
      fluid(quality: 90) {
           ...GatsbyContentfulFluid_tracedSVG
      }
    }
  }

  allContentfulFoodDrink(sort: {fields: sort}) {
    edges {
      node {
        slug
        name
      }
    }
  }


    allContentfulMembership(sort: {fields: sort}) {
    edges {
      node {
        name
        slug
      }
    }
  }


  allContentfulRooms(sort: {fields: sort}) {
    edges {
      node {
        roomName
        slug
      }
    }
  }


    allContentfulEvents(sort: {fields: sort}) {
    edges {
      node {
        title
        slug
      }
    }
  }

  }
`