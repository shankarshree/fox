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
      query Section3Query {

  allContentfulContentBlocks(filter: {id: {eq: "ee9f7e39-07e0-5040-90c9-74329113472f"}}) {
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
          fluid(quality:100) {
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
            <div className="content-img-rht rhtfox2">
              <div className="banner-rht" style={{ backgroundImage: `url(${node.image.fluid.src})`, }} />

              <Container>
                <Row>
                  <Col lg={6} md={6}>
                    <div className="pr-lg-4 mr-lg-5 content-details">
                      <h2 className="mb-4 custom-heading-line fox-font40">{node.titleToAppearInOtherPages}</h2>
                      <p className="mb-5 custom-content-line fox-font19"
                        dangerouslySetInnerHTML={{
                          __html: node.contentToAppearInOtherPages.childMarkdownRemark.html,
                        }}
                      />
                      <ScrollAnimation animateIn="fadeIn">
                        <div><Link to={`/${node.shortDescriptionLink}`} className="read-more mr-4">{node.linkTextToAppearInOtherPages}</Link> <ScrollAnimation animateIn="fadeInLeft" className="fade-inline"><i className="icon icon-red-arrow"></i></ScrollAnimation></div>
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
