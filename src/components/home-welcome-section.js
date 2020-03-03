import React from "react";
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ScrollAnimation from 'react-animate-on-scroll';
import LazyLoad from 'react-lazyload';


export default () => (
  <StaticQuery
    query={graphql`
      query VideoQuery {

  allContentfulContentBlocks(filter: {id: {eq: "845ac160-ac0c-56ff-aa26-1e13f38ea109"}}) {
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
           src
          }
        }
      }
    }
  }


  contentfulConfiguration {
    introVideoLink
  }


      }
    `}

    render={data => (
      <section className="layout-home">
        {data.allContentfulContentBlocks.edges.map(function ({ node, i }) {
          return <Container key={i}>
            <Row className="mt-3">
              <Col lg={6} md={6} className="d-flex align-items-end mb-3 pb-5 px-lg-1">
                <div className="pr-lg-4 mr-lg-5 pb-3">
                  <h2 className="mb-4 custom-heading-line fox-font40">{node.titleToAppearInOtherPages}</h2>
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
              <Col lg={6} md={6} className="mb-5 px-lg-0">
                <ScrollAnimation animateIn="fadeIn">
                  <div className="video-card">
                    <LazyLoad height={200} offset={600}>
                      <iframe title="foxclublondon" className="embed-responsive-item fox-video" src=""></iframe>
                    </LazyLoad>
                    <button className="video-img" style={{ backgroundImage: `url(${node.image.fluid.src})`, }}><span className="video-play"></span></button>
                  </div>

                </ScrollAnimation>
              </Col>
            </Row>
          </Container>

          // )
        })}
      </section>
    )}
  />
)
