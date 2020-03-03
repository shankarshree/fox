import React from "react";
import { Link } from "gatsby";
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import '../assets/styles/_index.scss';
import '../assets/styles/_custom.scss';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Contact from '../components/contact';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import $ from 'jquery';

import HeaderNavbar from '../components/header-navbar/HeaderNavbar';
import Header from '../components/header/Header';
import Membership from '../components/membership/Membership';
import Footer from '../components/footer/Footer';
const logo = require('../assets/img/logo1.svg');

class FoodAndDrinkDetailPage extends React.Component {

  componentDidMount() {
    var accItem = document.getElementsByClassName('accordionItem');
    var accHD = document.getElementsByClassName('toggle');
    var i;
    for (i = 0; i < accHD.length; i++) {
      accHD[i].addEventListener('click', toggleItem, false);
    }
    function toggleItem() {
      var itemClass = this.parentNode.className;
      for (i = 0; i < accItem.length; i++) {
        accItem[i].className = 'accordionItem closeacc';
      }
      if (itemClass == 'accordionItem closeacc') {
        this.parentNode.className = 'accordionItem open';
        var $panel = $(this).closest('.accordionItem');
        $('html,body').animate({
          scrollTop: $panel.offset().top
        }, 500);
      }
    }
  }

  render() {
    const details = get(this.props, 'data.contentfulFoodDrink')
    const pagename = get(this.props, 'data.contentfulFoodDrink.name')
    const foodmenu = get(this.props, 'data.contentfulFoodDrink.menus')

    const NotMemberBanner = get(this.props, 'data.contentfulConfiguration.notYetAMemberBanner.fluid.src')

    const seoMetaTitle = get(this, 'props.data.contentfulFoodDrink.seoMetaTitle')
    const seoMetaDescription = get(this, 'props.data.contentfulFoodDrink.seoMetaDescription')
    const seoMetaKeywords = get(this, 'props.data.contentfulFoodDrink.seoMetaKeywords')
    const url = typeof window !== 'undefined' ? window.location.href : ''


    const contactForm = get(this, 'props.data.contentfulFoodDrink.contactForm')

    return (
      <>
        <Helmet>
          <title>{seoMetaTitle}</title>
          <meta name="description" content={seoMetaDescription} />
          <meta name="keywords" content={seoMetaKeywords} />
          <link rel="canonical" href={url} />
          <meta property="og:site_name" content="thefoxclub" />
          <meta property="og:url" content={url} />
          <meta property="og:title" content={seoMetaTitle} />
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
        <HeaderNavbar />

        <section className="header-bg food-and-drink-detail" style={{ backgroundImage: `url(${details.bannerImage.fluid.src})`, }}>
          <Container>
            <Row className="d-flex justify-content-center">
              <Col lg={11} className="mb-md-5 header-content">
                <ScrollAnimation animateIn="fadeInUp" className="mb-5">
                  <h1
                    dangerouslySetInnerHTML={{
                      __html: details.bannertext.childMarkdownRemark.html,
                    }}
                  />
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeInUp" delay={300}>
                  <div className="">
                    <Link to="/contact-us?booking=food" className="btn header-btn">Contact Us</Link>
                  </div>
                </ScrollAnimation>
              </Col>
            </Row>
          </Container>
        </section>


        <section className="header-breadcrumb">
          <Container>
            <Row className="d-flex justify-content-center">
              <Col lg={10} className="px-lg-0">
                <ul className="list-inline">
                  <li className="list-inline-item"><Link to="/" className="breadcrumb-link">Home</Link> <i className="icon icon-arrow mx-2"></i></li>
                  <li className="list-inline-item"><Link to="/food-and-drink" className="breadcrumb-link">FOOD & DRINK</Link> <i className="icon icon-arrow mx-2"></i></li>
                  <li className="list-inline-item">{pagename}</li>
                </ul>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="layout-home food-drink">
          <Container>
            <Row className="d-flex justify-content-center">
              <Col lg={10} className="px-lg-5">
                <div className="">
                  <h3 className="mb-0 custom-heading-line fox-font30 px-lg-0 px-4"
                    dangerouslySetInnerHTML={{
                      __html: details.introContent.childMarkdownRemark.html,
                    }}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="food-drink-details pt-5">
          <Container>
            <Row className="d-flex justify-content-center">
              <Col lg={10} className="">
                <div className="mb-5"
                  dangerouslySetInnerHTML={{
                    __html: details.content.childMarkdownRemark.html,
                  }}
                />
              </Col>
            </Row>

            <Row className="d-flex justify-content-center pb-5">
              <Col lg={10} className="">
                {details.menus != null &&
                  <>
                    <div className="accordionWrapper food-drink-accordion-dinning">
                      {
                        foodmenu.map((menus, i) => (
                          <>
                            {
                              i === 0 ?
                                <div className="accordionItem open">
                                  <div className="card-header d-flex justify-content-between align-items-center toggle">
                                    <h4 className="accordionItemHeading">{menus.menuName}</h4>
                                    <i className="toggle-main"></i>
                                  </div>
                                  <div className="accordionItemContent">
                                    <div className="mb-5 card-bg"
                                      dangerouslySetInnerHTML={{
                                        __html: menus.content.childMarkdownRemark.html,
                                      }}
                                    />
                                  </div>
                                </div>
                                :
                                <div className="accordionItem closeacc">
                                  <div className="card-header d-flex justify-content-between align-items-center toggle">
                                    <h4 className="accordionItemHeading">{menus.menuName}</h4>
                                    <i className="toggle-main"></i>
                                  </div>
                                  <div className="accordionItemContent">
                                    <div className="mb-5 card-bg"
                                      dangerouslySetInnerHTML={{
                                        __html: menus.content.childMarkdownRemark.html,
                                      }}
                                    />
                                  </div>
                                </div>
                            }
                          </>
                        ))
                      }
                    </div>

                    {/* <Accordion defaultActiveKey={0} className="food-drink-accordion-dinning">
                      {
                        foodmenu.map((menus, i) => (
                          <>
                            <Accordion.Toggle as={Card.Header} eventKey={i} className="">
                              <div className="d-flex justify-content-between align-items-center">
                                <h4>{menus.menuName}</h4>
                                <i className="toggle-main"></i>
                              </div>
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey={i}>
                              <>
                                <i className="toggle-main"></i>
                                <div className="mb-5 card-bg"
                                  dangerouslySetInnerHTML={{
                                    __html: menus.content.childMarkdownRemark.html,
                                  }}
                                />
                              </>
                            </Accordion.Collapse>
                          </>
                        ))
                      }
                    </Accordion> */}
                  </>
                }
              </Col>
            </Row>
          </Container>
        </section>

        {contactForm === true &&
          <Contact />
        }

        {details.insteadOfNotYetMemberBlock === null &&
          <>
            <Membership />
          </>
        }

        {details.insteadOfNotYetMemberBlock != null &&
          <>

            <section className="membership membership-bg d-flex align-items-center" style={{ backgroundImage: `url(${NotMemberBanner})`, }}>

              <Container className="d-flex justify-content-center">
                <Row className="w-100">
                  <Col lg={12} md={12} className="text-md-right text-center pr-lg-5 pr-md-4" style={{ marginBottom: `5rem`, }}>
                    <div className=""
                      dangerouslySetInnerHTML={{
                        __html: details.insteadOfNotYetMemberBlock.childMarkdownRemark.html,
                      }}
                    />
                  </Col>
                </Row>
              </Container>
            </section>

          </>
        }





        <Footer />
      </>
    )
  }
}

export default FoodAndDrinkDetailPage

export const pageQuery = graphql`
  query FoodAndDrinkSlug($slug: String!) {

  contentfulFoodDrink(slug: { eq: $slug }) {
    bannerImage {
      fluid(quality:100,maxWidth: 1400) {
        base64
        srcWebp
        src
        srcSetWebp
      }
    }
    
    content {
      childMarkdownRemark {
        html
      }
    }
    name
    introContent {
      childMarkdownRemark {
        html
      }
    }

    seoMetaDescription
    seoMetaKeywords
    seoMetaTitle
    contactForm
    bannertext {
      childMarkdownRemark {
        html
      }
    }


    menus {
      menuName
      parentCategory
      content {
        childMarkdownRemark {
          html
        }
      }
    }


    insteadOfNotYetMemberBlock {
      childMarkdownRemark {
        html
      }
    }

  }



  contentfulConfiguration {
    notYetAMemberBanner {
      fluid(quality: 80) {
        src
      }
    }
  }
  }
`
