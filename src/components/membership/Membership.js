import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby"
import './assets/styles/_index.scss';


export default () => (
  <StaticQuery
    query={graphql`
      query MmbershipQuery {

  
  contentfulConfiguration {
    notYetAMemberBanner {
      fluid(quality: 100, maxWidth: 1400) {
        src
      }
    }
  }
      }
    `}

    render={data => (
      <>
        <section className="membership membership-bg d-flex align-items-center" style={{ backgroundImage: `url(${data.contentfulConfiguration.notYetAMemberBanner.fluid.src})`, }}>

          <Container className="d-flex justify-content-center">
            <Row className="w-100">
              <Col lg={6} md={6} className="text-md-right text-center mb-lg-3 pr-lg-3 pr-md-4 mb-md-0 mb-5">
                <h2 className="membershipt-text mt-2 mb-0 custom-heading-line fox-font40">Not yet a member?</h2>
              </Col>
              <Col lg={6} md={6} className="text-md-left text-center pl-lg-5 pl-md-5">
                <Link to="/membership/membership-form" className="btn membership-btn">Membership</Link>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    )}
  />
)
