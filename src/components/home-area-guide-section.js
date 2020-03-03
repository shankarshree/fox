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
      query AreaQuery {
  allContentfulContentBlocks(filter: {id: {eq: "20a473a4-9926-54b5-bf19-7a4b04efae57"}}) {
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
           src
          }
        }
        id
      }
    }
  }
      }
    `}
    render={data => (
      <section className="layout-home2">


        {data.allContentfulContentBlocks.edges.map(({ node }) => {
          return (

            <Container>
              <Row className="pt-3">
                <Col lg={6} md={6} className="mb-3 order-md-1 order-2">
                  <ScrollAnimation animateIn="fadeIn">
                    <div className="cardimg">
                      <div className="cardimg-img" style={{ backgroundImage: `url(${node.image.fluid.src})`, }}></div>
                    </div>
                  </ScrollAnimation>
                </Col>
                <Col lg={6} md={6} className="d-flex align-items-center mb-3 order-md-2 order-1 mb-5">
                  <div className="pl-xl-4 ml-lg-5">
                    <h2 className="mb-4 custom-heading-line fox-font40">{node.titleToAppearInOtherPages}</h2>

                    <div className="mb-5 custom-content-line fox-font19"
                      dangerouslySetInnerHTML={{
                        __html: node.contentToAppearInOtherPages.childMarkdownRemark.html,
                      }}
                    />
                    <ScrollAnimation animateIn="fadeIn">
                      <div><Link to={`/${node.shortDescriptionLink}`} className="read-more mr-4">{node.linkTextToAppearInOtherPages}</Link>  <ScrollAnimation animateIn="fadeInLeft" className="fade-inline"><i className="icon icon-red-arrow"></i></ScrollAnimation></div>
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
