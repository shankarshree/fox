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
      query Area1Query {
  allContentfulContentBlocks(filter: {id: {eq: "411217e5-6a24-5e87-9517-262fb2419913"}}) {
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
    `}
    render={data => (
      <section className="layout-home2 area-guide">


        {data.allContentfulContentBlocks.edges.map(({ node }) => {
          return (

            <Container>
              <Row>
                <Col lg={6} md={6} className="mb-5">
                  <ScrollAnimation animateIn="fadeIn">
                    <div className="cardimg">

                      <div className="cardimg-img area-guideimg" style={{ backgroundImage: `url(${node.image.fluid.src})`, }}></div>
                    </div>
                  </ScrollAnimation>
                </Col>
                <Col lg={6} md={6} className="d-flex align-items-center mb-3">
                  <div className="pl-lg-5 ml-lg-5 pl-4">
                    <h2 className="mb-4">{node.titleToAppearInOtherPages}</h2>

                    <div className="mb-5 custom-content-line fox-font19"
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

          )
        })}
      </section>
    )}
  />
)
