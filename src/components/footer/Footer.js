import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "gatsby";
import './assets/styles/_index.scss';
import CookieConsent from "react-cookie-consent";

import { StaticQuery, graphql } from "gatsby"

const footerlogo = require('./assets/img/foxicon.svg');

const year = new Date().getFullYear();


export default () => (

  <StaticQuery
    query={graphql`
      query FootQuery {

  contentfulConfiguration {
    Email {
      childMarkdownRemark {
        html
      }
    }
    location {
      childMarkdownRemark {
        html
      }
    }
    telephone {
      childMarkdownRemark {
        html
      }
    }
    footerMenus {
      slug
      pageName
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
    `}


    render={data => (
      <>

        <footer className="footer footer-bg">
          <Container className="px-xl-0 ftwidth mt-2">
            <Row className="mb-5 pb-3 d-flex align-items-center">
              <Col lg={1} md={1} className="text-lg-left text-center">
                <Link to="/">
                  <img src={footerlogo} className="img-fluid" alt="" />
                </Link>
              </Col>
              <Col lg={10} md={11} className="d-md-block d-none pl-lg-4 ml-lg-3">
                <ul className="list-group list-group-horizontal-md">
                  {data.contentfulConfiguration.footerMenus.map((footerMenus, key) => {
                    return (
                      <>
                      {footerMenus.pageName != "Events / Meetings" &&
                      <li className="d-block">
                        <Link to={`/${footerMenus.slug}`} className="footer-nav">{footerMenus.pageName}</Link></li>
                      }
                      {footerMenus.pageName === "Events / Meetings" &&
                      <li className="d-block">
                        <Link to={`/${footerMenus.slug}`} className="footer-nav">Events</Link></li>
                      }
                      </>
                    )
                  })}
                </ul>
              </Col>
              <Col xs={6} className="d-md-none d-block">
                <ul className="list-group">
                  <li className="d-block"><Link to="/the-fox-club" className="footer-nav">The Fox Club</Link></li>
                  <li className="d-block"><Link to="/membership" className="footer-nav">Membership</Link></li>
                  <li className="d-block"><Link to="/events" className="footer-nav">Events</Link></li>
                </ul>
              </Col>
              <Col xs={6} className="d-md-none d-block">
                <ul className="list-group">
                  <li className="d-block"><Link to="/food-and-drink" className="footer-nav">Food and Drink</Link></li>
                  <li className="d-block"><Link to="/rooms" className="footer-nav">Rooms</Link></li>
                  <li className="d-block"><Link to="/contact-us" className="footer-nav">Contact</Link></li>
                </ul>
              </Col>
            </Row>

            <Row className="mb-5 pb-4">
              <Col lg={3} md={3} xs={6}>
                <p className="footer-heading">Location</p>
                <div className="footer-details"
                  dangerouslySetInnerHTML={{
                    __html: data.contentfulConfiguration.location.childMarkdownRemark.html,
                  }}
                />
              </Col>
              <Col lg={3} md={3} xs={6} className="mb-md-0 mb-5 px-lg-3 px-0">
                <p className="footer-heading">Have a Question?</p>
                <div className="footer-details"
                  dangerouslySetInnerHTML={{
                    __html: data.contentfulConfiguration.telephone.childMarkdownRemark.html,
                  }}
                />
                <div className="footer-details"
                  dangerouslySetInnerHTML={{
                    __html: data.contentfulConfiguration.Email.childMarkdownRemark.html,
                  }}
                />
              </Col>
              <Col lg={3} md={3} xs={6} className="px-md-0 px-lg-3">
                <p className="footer-heading">Social</p>
                <ul className="list-inline social-icons">

                  {data.contentfulConfiguration.socialIcons.map((socialIcons, key) => {
                    return (
                      <>
                        <li className="list-inline-item"><a href={`${socialIcons.link}`} target="_blank"><i className="icons" style={{ backgroundImage: `url(${socialIcons.icon.file.url})`, }}></i></a></li>
                      </>
                    )
                  })}

                </ul>
              </Col>
              <Col lg={3} md={3} xs={6} className="tripadvisor">
                <div id="TA_cdsratingsonlynarrow74">
                </div>
              </Col>
            </Row>

            <Row className="mb-5">
              <Col lg={12} className="footer-line mx-2 mt-3"></Col>
            </Row>

            <Row className="mb-3">
              <Col lg={12} className="text-center text-md-left">
                <ul className="list-inline footer-list">
                  <li className="list-inline-item"><Link to="/privacy-policy" className="">Privacy Policy</Link></li>
                  <li className="list-inline-item">|</li>
                  <li className="list-inline-item"><Link to="/cookie-policy" className="">Cookie Policy</Link></li>
                  <li className="list-inline-item">|</li>
                  <li className="list-inline-item"><Link to="/terms-and-conditions" className="">Terms & Conditions</Link></li>
                  <li className="list-inline-item">|</li>
                  <li className="list-inline-item"><Link to="/sitemap" className="">Sitemap</Link></li>
                  <li className="list-inline-item">|</li>
                  <li className="list-inline-item">©{year} Fox Fabs Ltd. All rights reserved</li>
                </ul>
              </Col>
              <Col lg={12} className="text-center text-md-left">
                <span className="footer-logo">Site by</span> <a href="https://starberry.tv/" target="_blank"><i className="icon icon-footerlogo"></i></a>
              </Col>
            </Row>
          </Container>
<CookieConsent
    disableStyles={true}
    buttonClasses="btn btn-primary"
    containerClasses="cookie-popup d-lg-flex d-block"
    contentClasses="text-capitalize"
    buttonClasses="btn btn-link gotit"
    buttonText="Got it!"

>
    <p className="mb-0 text-center">We use cookies to give you the best experience on our website. By continuing, you agree to our <Link to="/cookie-policy">Cookie Policy</Link>.</p>
</CookieConsent>


        </footer>
      </>

    )}
  />
)
