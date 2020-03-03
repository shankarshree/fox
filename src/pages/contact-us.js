import React from "react";
import { Link } from "gatsby";
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import '../assets/styles/_index.scss';
import '../assets/styles/_custom.scss';

import queryString from 'query-string'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import $ from 'jquery';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

import HeaderNavbar from '../components/header-navbar/HeaderNavbar';
import ContactForm from '../components/contact-form/ContactForm';
import Membership from '../components/membership/Membership';
import Footer from '../components/footer/Footer';
const logo = require('../assets/img/logo1.svg');

class ContactusPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mybooking: 'rooms',
    };
    const values = queryString.parse(this.props.location.search)
    if (values.booking) {
      this.state.mybooking = values.booking;
    }
  }

  componentDidMount() {
    $(".viewmap").click(function () {
      $('html, body').animate({
        scrollTop: $("#map").offset().top
      }, 800);
    });
  }

  render() {
    const contact = get(this, 'props.data.allContentfulPages.edges')

    const location = get(this, 'props.data.contentfulConfiguration.location.childMarkdownRemark.html')
    const telephone = get(this, 'props.data.contentfulConfiguration.telephone.childMarkdownRemark.html')
    const Email = get(this, 'props.data.contentfulConfiguration.Email.childMarkdownRemark.html')
    const social = get(this, 'props.data.contentfulConfiguration.socialIcons')


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
          <meta property="og:title" content="Contact Us" />
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
        {contact.map(({ node }) => {
          return (
            <>
              <HeaderNavbar />

              <section className="layout-findus contactus pb-5">
                <div className="find-form pb-5">
                  <Container className="px-lg-4">
                    <Row className="mb-4">
                      <Col lg={12}>
                        <ScrollAnimation animateIn="fadeInUp">
                          <h1>{node.bannerContent}</h1>
                        </ScrollAnimation>
                      </Col>
                    </Row>

                    <Row className="pl-lg-2">
                      <Col lg={7} md={8} className="mb-5">
                        <ScrollAnimation animateIn="fadeIn">
                          <div className="form contact-form">
                            <ContactForm radioSelect={this.state.mybooking} />
                          </div>
                        </ScrollAnimation>
                      </Col>
                      <Col lg={1} className="d-none d-lg-block"></Col>
                      <Col lg={3} md={4} className="mb-5">
                        <ScrollAnimation animateIn="fadeIn" delay={200}>
                          <div className="details">
                            <p className="fox-small-bold fox-font19">Location</p>
                            <div className="mb-0 fox-font19"
                              dangerouslySetInnerHTML={{
                                __html: location,
                              }}
                            />
                            <a href="#map" className="viewmap fox-font19">View in Google Maps</a>
                          </div>

                          <div className="border-line my-4"></div>

                          <div className="details">
                            <p className="fox-small-bold fox-font19">Telephone</p>
                            <div className="fox-font19"
                              dangerouslySetInnerHTML={{
                                __html: telephone,
                              }}
                            />
                          </div>

                          <div className="border-line my-4"></div>

                          <div className="details">
                            <p className="fox-small-bold fox-font19">Email</p>
                            <div className=" fox-font19"
                              dangerouslySetInnerHTML={{
                                __html: Email,
                              }}
                            />
                          </div>

                          <div className="border-line my-4"></div>

                          <div className="details">
                            <p className="fox-small-bold fox-font19">Social</p>
                            <ul className="list-inline social-icons">

                              {social.map((social, key) => {
                                return (
                                  <>
                                    <li className="list-inline-item mr-4"><a href={`${social.link}`} target="_blank"><i className="icons" style={{ backgroundImage: `url(${social.icon.file.url})`, }}></i></a></li>
                                  </>
                                )
                              })}

                            </ul>
                          </div>
                        </ScrollAnimation>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </section>

              <section className="map" id="map">
                <iframe title="Contact Us" className="map-item" src="//maps.google.com/maps?output=embed&amp;q=46%20Clarges%20Street%20%0ALondon%2C%20W1J%207ER&amp;z=15&amp;t=m" data-map="JTdCJTIycG9zaXRpb25UeXBlJTIyJTNBJTIybWFwLWFkZHJlc3MlMjIlMkMlMjJhZGRyZXNzJTIyJTNBJTIyNDYlMjBDbGFyZ2VzJTIwU3RyZWV0JTIwJTVDbkxvbmRvbiUyQyUyMFcxSiUyMDdFUiUyMiUyQyUyMnpvb20lMjIlM0ExNSUyQyUyMnR5cGVJZCUyMiUzQSUyMnJvYWQlMjIlMkMlMjJsYW5nJTIyJTNBbnVsbCUyQyUyMmFwaUtleSUyMiUzQW51bGwlMkMlMjJtYXJrZXJzJTIyJTNBJTVCJTVEJTdE">   </iframe>
              </section>

              <Membership />

              <Footer />

            </>
          )
        })}
      </>
    )
  }
}

export default ContactusPage


export const pageQuery = graphql`
  query ContactusPage {
  allContentfulPages(filter: {id: {eq: "20739785-962e-513a-8438-b3dc42500385"}}) {
    edges {
      node {
        bannerContent
        bannerLink
        bannerLinkText
        id        
      }
    }
  }

    contentfulPages(id: {eq: "20739785-962e-513a-8438-b3dc42500385"}) {
    seoMetaKeywords
    seoMetaTitle
    seometaDescription
    content {
      childMarkdownRemark {
        html
      }
    }
  }


  contentfulConfiguration {
    Email {
      childMarkdownRemark {
        html
      }
    }
    telephone {
      childMarkdownRemark {
        html
      }
    }
    location {
      childMarkdownRemark {
        html
      }
    }
    socialIcons {
      link
      icon {
        file {
          url
        }
      }
    }
  }
  }
`