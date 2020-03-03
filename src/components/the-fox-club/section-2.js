import React from "react";
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ScrollAnimation from 'react-animate-on-scroll';


export default () => (
  <StaticQuery
    query={graphql`
      query Section2Query {

  allContentfulContentBlocks(filter: {id: {eq: "ebc6a27d-2f48-5bbe-a87b-0377638e5b63"}}) {
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
      }
    }
  }
      }
    `}
    render={data => (
      <>
        {data.allContentfulContentBlocks.edges.map(({ node }) => {
          return (
            <div className="content-img-lht lhtfox1">
              <div className="banner-lft" style={{ backgroundImage: `url(${node.image.fluid.src})`, }} />

              <Container>
                <Row>
                  <Col lg={6} md={6}></Col>
                  <Col lg={6} md={6}>
                    <div className="pl-lg-4 ml-lg-5 content-details">
                      <h2 className="mb-4 custom-heading-line fox-font40">Our Local Area</h2>
                      <p className="mb-5 custom-content-line fox-font19">You’ll find us right in the heart of London’s exclusive Mayfair district, just a short stroll away from Green Park tube station.</p>
                      <ScrollAnimation animateIn="fadeIn">
                        <div><Link to="/the-fox-club/area-guide" className="read-more mr-4">Explore Our Surroundings</Link> <ScrollAnimation animateIn="fadeInLeft" className="fade-inline"><i className="icon icon-red-arrow"></i></ScrollAnimation></div>
                      </ScrollAnimation>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>

          )
        })}
      </>
    )}
  />
)
