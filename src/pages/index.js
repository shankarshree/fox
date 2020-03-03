import React from "react";
import { Link } from "gatsby";
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import '../assets/styles/_index.scss';
import '../assets/styles/_custom.scss';
import LazyLoad from 'react-lazyload';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import $ from 'jquery';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import ContactForm from '../components/contact-form/ContactForm';

import BackgroundImage from 'gatsby-background-image'
import Img from "gatsby-image"

import HeaderNavbar from '../components/header-navbar/HeaderNavbar';
import HomeWelcomeSection from '../components/home-welcome-section';
import HomeAreaGuideSection from '../components/home-area-guide-section';
import Header from '../components/header/Header';
import Contact from '../components/contact';
import Membership from '../components/membership/Membership';
import Footer from '../components/footer/Footer';


const logo = require('../assets/img/logo1.svg');
class IndexPage extends React.Component {

  componentDidMount() {
    $('.video-img').click(function () {
      $('.video-play').hide();
      $('.fox-video').show();
      $(".fox-video")[0].src = "https://www.youtube.com/embed/CSj3zmBDRB0?autoplay=1&mute=1";
    });

    // Mac safari code
    if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
      var body = document.body;
      body.classList.add("mac");
    }
    // 
  }

  render() {
    const home = get(this, 'props.data.allContentfulPages.edges')

    const contentBlocks = get(this, 'props.data.contentfulPages.contentBlocks')

    const contactForm = get(this, 'props.data.contentfulPages.contactForm')

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
          <meta property="og:title" content="homepage" />
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

          <script type="application/ld+json">
            {`{
               "@context": "http://schema.org",
               "@type": "WebSite",
               "name": "thefoxclub",
               "potentialAction": {
                 "@type": "SearchAction",
                 "target": "https://www.foxclublondon.com/index.php?searchword={query}&option=com_search",
                 "query-input": "required name=query"
               },
               "url": "https://www.foxclublondon.com/"
             }`}
          </script>
        </Helmet>

        {home.map(({ node }, i) => {
          return (
            <>
              <HeaderNavbar />

              <BackgroundImage
                Tag="section"
                className={"header-bg " + "home-bg" + " d-flex align-items-end"}
                fluid={node.bannerImage.fluid}
              >
                <Container>
                  <Row className="d-flex justify-content-center">
                    <Col lg={11} className="mb-md-5 header-content">
                      <ScrollAnimation animateIn="fadeInUp" className="mb-5">
                        <h1>{node.bannerContent}</h1>
                      </ScrollAnimation>

                      <ScrollAnimation animateIn="fadeInUp" delay={300}>
                        <div className="">
                          <Link to={node.bannerLink} className="btn header-btn">{node.bannerLinkText}</Link>
                        </div>
                      </ScrollAnimation>
                    </Col>
                  </Row>
                </Container>
              </BackgroundImage>

              <HomeWelcomeSection />

              <LazyLoad height={500} offset={800}>
                <section className="layout-grid">
                  {
                    contentBlocks.map(function (contentBlocks, i) {
                      return <ScrollAnimation key={i} animateIn="fadeIn">
                        {
                          i % 2 ?
                            <div className={"content-img-lht " + contentBlocks.id}>
                              <Img className="banner-lft" id="banner-lft" fluid={contentBlocks.image.fluid} />
                              <Container>
                                <Row>

                                  <Col lg={6} md={6}></Col>
                                  <Col lg={6} md={6} className="layout-min-height d-flex align-items-center">
                                    <div className="pl-lg-4 ml-lg-5 content-details">
                                      <h2 className="mb-4 custom-heading-line fox-font40">{contentBlocks.titleToAppearInOtherPages}</h2>
                                      <div className="mb-5 custom-content-line fox-font19"
                                        dangerouslySetInnerHTML={{
                                          __html: contentBlocks.contentToAppearInOtherPages.childMarkdownRemark.html,
                                        }}
                                      />
                                      <ScrollAnimation animateIn="fadeIn">
                                        <div>


                                          {contentBlocks.shortDescriptionLinkMail == null &&

                                            <Link to={`/${contentBlocks.shortDescriptionLink}`} className="read-more mr-4">{contentBlocks.linkTextToAppearInOtherPages}</Link>
                                          }

                                          {contentBlocks.shortDescriptionLink == null &&

                                            <a href={`mailto:${contentBlocks.shortDescriptionLinkMail}`} className="read-more mr-4">{contentBlocks.linkTextToAppearInOtherPages}</a>
                                          }
                                          <ScrollAnimation animateIn="fadeInLeft" className="fade-inline"><i className="icon icon-red-arrow"></i></ScrollAnimation></div>
                                      </ScrollAnimation>
                                    </div>
                                  </Col>
                                </Row>
                              </Container>
                            </div>
                            :
                            <div className={"content-img-rht " + contentBlocks.id}>
                              <Img className="banner-rht" id="banner-rht" fluid={contentBlocks.image.fluid} />
                              <Container>
                                <Row>
                                  <Col lg={6} md={6} className="layout-min-height d-flex align-items-center">
                                    <div className="pr-lg-4 mr-lg-5 content-details">
                                      <h2 className="mb-4 custom-heading-line fox-font40">{contentBlocks.titleToAppearInOtherPages}</h2>
                                      <div className="mb-5 custom-content-line fox-font19"
                                        dangerouslySetInnerHTML={{
                                          __html: contentBlocks.contentToAppearInOtherPages.childMarkdownRemark.html,
                                        }}
                                      />
                                      <ScrollAnimation animateIn="fadeIn">
                                        <div>

                                          {contentBlocks.shortDescriptionLinkMail == null &&

                                            <Link to={`/${contentBlocks.shortDescriptionLink}`} className="read-more mr-4">{contentBlocks.linkTextToAppearInOtherPages}</Link>
                                          }

                                          {contentBlocks.shortDescriptionLink == null &&

                                            <a href={`mailto:${contentBlocks.shortDescriptionLinkMail}`} className="read-more mr-4">{contentBlocks.linkTextToAppearInOtherPages}</a>
                                          }

                                          <ScrollAnimation animateIn="fadeInLeft" className="fade-inline"><i className="icon icon-red-arrow"></i></ScrollAnimation></div>
                                      </ScrollAnimation>
                                    </div>
                                  </Col>
                                </Row>
                              </Container>
                            </div>
                        }
                      </ScrollAnimation>
                      // )
                    })
                  }
                </section>
              </LazyLoad>
              <LazyLoad>

                {contactForm === true &&
                  <>
                    <Contact />
                  </>
                }

              </LazyLoad>
              <LazyLoad>
                <HomeAreaGuideSection />
              </LazyLoad>

              <LazyLoad>
                <Membership />
              </LazyLoad>
              <Footer />

            </>
          )
        })}
      </>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query HomeQuery {
  allContentfulPages(filter: {id: {eq: "82f1f35a-6ab3-59f9-9bcd-a70b4e9b0e66"}}) {
    edges {
      node {
        bannerContent
        bannerLink
        bannerLinkText
        id
        bannerImage {
          fluid( quality: 100, maxWidth: 1500) {
           ...GatsbyContentfulFluid_withWebp
          }
        }        
      }
    }
  }

  
  

    contentfulPages(id: {eq: "82f1f35a-6ab3-59f9-9bcd-a70b4e9b0e66"}) {
    seoMetaKeywords
    seoMetaTitle
    seometaDescription
    contactForm
        contentBlocks {
        id
        linkTextToAppearInOtherPages
        titleToAppearInOtherPages
        shortDescriptionLink
        image {
          fluid(quality:100) {
           ...GatsbyContentfulFluid_withWebp
          }
        }
        contentToAppearInOtherPages {
          childMarkdownRemark {
            html
          }
        }
        }
  }
  }
`
