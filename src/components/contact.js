import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { Link } from "gatsby";
import ContactForm from '../components/contact-form/ContactForm';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import Img from "gatsby-image"

import BackgroundImage from 'gatsby-background-image'


export default () => (
  <StaticQuery
    query={graphql`
      query ContactFormQuery {

  
  contentfulConfiguration {
    contactFormBackground {
      fluid(quality: 100, maxWidth: 1400) {
           ...GatsbyContentfulFluid_withWebp
      }
    }
    contactFormBanner {
      fluid(quality: 100, maxWidth: 1400) {
           ...GatsbyContentfulFluid_withWebp
      }
    }
  }
      }
    `}

    render={data => (
      <>
        <section className="layout-contact">
          <div className="container-fluid">
            <Row>

              <Col lg={6} md={6} className="px-0">
                <BackgroundImage
                  Tag="section"
                  className="contact-bg-lft"
                  fluid={data.contentfulConfiguration.contactFormBackground.fluid}
                >
                  <div className="px-5 form contact-form">
                    <h5 className="mb-5">Contact Us</h5>
                    <ContactForm radioSelect="rooms" />
                  </div>
                </BackgroundImage>

              </Col>
              <Col lg={6} md={6} className="px-0">
                <Img className="contact-bg-rht" fluid={data.contentfulConfiguration.contactFormBanner.fluid} />
              </Col>
            </Row>
          </div>
        </section>

      </>
    )}
  />
)
