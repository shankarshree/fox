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
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import Contact from '../components/contact';

import BackgroundImage from 'gatsby-background-image'
import ContactForm from '../components/contact-form/ContactForm';

import HeaderNavbar from '../components/header-navbar/HeaderNavbar';
import Header from '../components/header/Header';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import Membership from '../components/membership/Membership';
import Footer from '../components/footer/Footer';

const logo = require('../assets/img/logo1.svg');

class RoomsPage extends React.Component {
  render() {
    const rooms = get(this, 'props.data.allContentfulPages.edges')
    const allrooms = get(this, 'props.data.allContentfulRooms.edges')
    const rates = get(this, 'props.data.allContentfulAccommodationRates.edges')
    const PageContent = get(this, 'props.data.contentfulPages.content.childMarkdownRemark.html')

    const Block = get(this, 'props.data.allContentfulContentBlocks.edges')
    const contentBlocks = get(this, 'props.data.contentfulPages.contentBlocks')


    const contactForm = get(this, 'props.data.contentfulPages.contactForm')
    const contactFormBanner = get(this, 'props.data.contentfulPages.contactBannerRight')
    const contactFormBackground = get(this, 'props.data.contentfulConfiguration.contactFormBackground')

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
          <meta property="og:title" content="rooms-and-suits" />
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
        {rooms.map(({ node }) => {
          return (
            <>
              <HeaderNavbar />

              <Header headerBg="" headerImage={node.bannerImage.fluid.src} headerContent={node.bannerContent} buttonName={node.bannerLinkText} buttonLink={node.bannerLink} />

              <Breadcrumb pageName="ROOMS" />

              <section className="layout-home room">
                <Container>
                  <Row className="d-flex justify-content-center">
                    <Col lg={10} className="px-lg-5">
                      <div className="">
                        <h3 className="mb-0 custom-heading-line fox-font30"
                          dangerouslySetInnerHTML={{
                            __html: PageContent,
                          }}
                        />
                      </div>
                    </Col>
                  </Row>
                </Container>
              </section>

              <section className="layout-grid">


{contentBlocks != null &&
<>
               {contentBlocks.map((contentBlocks, i) => {
                  return (

                    <ScrollAnimation animateIn="fadeIn">
                      {
                        i % 2 ?

                          <div className={"content-img-rht " + contentBlocks.id}>

                            <div className="banner-rht" style={{ backgroundImage: `url(${contentBlocks.image.fluid.src})`, }} />

                            <Container>
                              <Row>
                                <Col lg={6} md={6} className="layout-min-height d-flex align-items-center">
                                  <div className="pr-lg-4 mr-lg-5 content-details">
                                    <h2 className="mb-4 pb-2 custom-heading-line fox-font40">{contentBlocks.titleToAppearInOtherPages}</h2>

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
                                                    <div className={"content-img-lht " + contentBlocks.id}>

                            <div className="banner-lft" style={{ backgroundImage: `url(${contentBlocks.image.fluid.src})`, }} />

                            <Container>
                              <Row>
                                <Col lg={6} md={6}></Col>
                                <Col lg={6} md={6} className="layout-min-height d-flex align-items-center">
                                  <div className="pl-lg-4 ml-lg-5 content-details">
                                    <h2 className="mb-4 pb-2 custom-heading-line fox-font40">{contentBlocks.titleToAppearInOtherPages}</h2>

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
                  )
                })}
</>
}


                {allrooms.map(({ node }, i) => {
                  return (

                    <ScrollAnimation animateIn="fadeIn">
                      {
                        i % 2 ?
                          <div className={"content-img-lht " + node.roomName}>

                            <div className="banner-lft" style={{ backgroundImage: `url(${node.thumbnail.fluid.src})`, }} />

                            <Container>
                              <Row>
                                <Col lg={6} md={6}></Col>
                                <Col lg={6} md={6} className="layout-min-height d-flex align-items-center">
                                  <div className="pl-lg-4 ml-lg-5 content-details">
                                    <h2 className="mb-4 custom-heading-line fox-font40">{node.roomName}</h2>

                                    <div className="mb-5 custom-content-line fox-font19"
                                      dangerouslySetInnerHTML={{
                                        __html: node.shortDescription.childMarkdownRemark.html,
                                      }}
                                    />

                                    <ScrollAnimation animateIn="fadeIn">
                                      <div><Link to={`/rooms/${node.slug}`} className="read-more mr-4">Explore the Room</Link> <ScrollAnimation animateIn="fadeInLeft" className="fade-inline"><i className="icon icon-red-arrow"></i></ScrollAnimation></div>
                                    </ScrollAnimation>
                                  </div>
                                </Col>
                              </Row>
                            </Container>
                          </div>
                          :
                          <div className={"content-img-rht " + node.roomName}>

                            <div className="banner-rht" style={{ backgroundImage: `url(${node.thumbnail.fluid.src})`, }} />

                            <Container>
                              <Row>
                                <Col lg={6} md={6} className="layout-min-height d-flex align-items-center">
                                  <div className="pr-lg-4 mr-lg-5 content-details">
                                    <h2 className="mb-4 custom-heading-line fox-font40">{node.roomName}</h2>

                                    <div className="mb-5 custom-content-line fox-font19"
                                      dangerouslySetInnerHTML={{
                                        __html: node.shortDescription.childMarkdownRemark.html,
                                      }}
                                    />

                                    <ScrollAnimation animateIn="fadeIn">
                                      <div><Link to={`/rooms/${node.slug}`} className="read-more mr-4">Explore the Room</Link> <ScrollAnimation animateIn="fadeInLeft" className="fade-inline"><i className="icon icon-red-arrow"></i></ScrollAnimation></div>
                                    </ScrollAnimation>
                                  </div>
                                </Col>
                              </Row>
                            </Container>
                          </div>
                      }
                    </ScrollAnimation>

                  )
                })}

              </section>

              <section className="layout-bg">
                <Container className="mt-5">
                  <Row className="mb-4">
                    <Col lg={12}>
                      <div className="d-md-flex justify-content-md-start align-items-md-center">
                        <h2 className="mr-md-4 mb-2 custom-heading-line fox-font40">Accommodation Rates</h2>
                        <p className="mb-md-0 custom-content-line fox-font19">(per room per night)</p>
                      </div>
                      <p className="custom-content-line fox-font19">Members can enjoy an overnight stay right in the heart of Mayfair in one of eight spacious executive rooms or suites. The Fox Club rooms are uniquely different whilst retaining a rich history from one of it’s former residents in the 18th century, <Link to="/the-fox-club/our-history" className="content-link">Charles James Fox</Link> a renowned statesman.</p>
                    </Col>
                  </Row>

                  {rates.map(({ node }) => {
                    return (

                      <Row className="mb-5">
                        <Col lg={6} md={6} className="pr-lg-5 mb-5 mb-lg-0">
                          <h2 className="custom-heading-line fox-font40 mb-3">Members</h2>
                          <p className="mb-0">(Rates are inclusive of Continental breakfast & VAT)</p>
                          <b className="mb-3 fox-bold">{node.title}</b>

                          <p className="fox-small-bold mt-4">{node.membersHeading1}</p>

                          <Row>
                            <Col lg={6} md={6}>
                              <div className="fox-text22 mb-5"
                                dangerouslySetInnerHTML={{
                                  __html: node.membersContent11.childMarkdownRemark.html,
                                }}
                              />
                            </Col>

                            <Col lg={6} md={6}>
                              <div className="fox-text22"
                                dangerouslySetInnerHTML={{
                                  __html: node.membersContent12.childMarkdownRemark.html,
                                }}
                              />
                            </Col>
                          </Row>

                          <p className="fox-small-bold mt-5">{node.membersHeading2}</p>

                          <Row>
                            <Col lg={6} md={6}>
                              <div className="fox-text22 mb-5"
                                dangerouslySetInnerHTML={{
                                  __html: node.membersContent21.childMarkdownRemark.html,
                                }}
                              />
                            </Col>

                            <Col lg={6} md={6}>
                              <div className="fox-text22"
                                dangerouslySetInnerHTML={{
                                  __html: node.membersContent22.childMarkdownRemark.html,
                                }}
                              />
                            </Col>
                          </Row>
                        </Col>
                        <Col lg={6} md={6} className="pl-lg-5">
                          <h2 className="custom-heading-line fox-font40 mb-3">Non Members</h2>
                          <p>(Rates are inclusive of Continental breakfast & VAT)</p>

                          <p className="fox-small-bold mt-4">{node.nonMembersHeading1}</p>

                          <Row>
                            <Col lg={6} md={6}>
                              <div className="fox-text22 mb-5"
                                dangerouslySetInnerHTML={{
                                  __html: node.nonMembersContent11.childMarkdownRemark.html,
                                }}
                              />
                            </Col>

                            <Col lg={6} md={6}>
                              <div className="fox-text22"
                                dangerouslySetInnerHTML={{
                                  __html: node.nonMembersContent12.childMarkdownRemark.html,
                                }}
                              />
                            </Col>
                          </Row>

                          <p className="fox-small-bold mt-5">{node.nonMembersHeading2}</p>

                          <Row>
                            <Col lg={6} md={6}>
                              <div className="fox-text22 mb-5"
                                dangerouslySetInnerHTML={{
                                  __html: node.nonmembersContent21.childMarkdownRemark.html,
                                }}
                              />
                            </Col>

                            <Col lg={6} md={6}>
                              <div className="fox-text22"
                                dangerouslySetInnerHTML={{
                                  __html: node.nonMembersContent22.childMarkdownRemark.html,
                                }}
                              />
                            </Col>
                          </Row>
                        </Col>
                      </Row>

                    )
                  })}

                </Container>
              </section>

              {Block.map(({ node }) => {
                return (
                  <section className="layout-home2">
                    <Container>
                      <Row>
                        <Col lg={6} md={6} className="mb-5">
                          <ScrollAnimation animateIn="fadeInLeft">
                            <div className="cardimg">
                              <div className="cardimg-img" style={{ backgroundImage: `url(${node.image.fluid.src})`, }}></div>
                            </div>
                          </ScrollAnimation>
                        </Col>
                        <Col lg={6} md={6} className="d-flex align-items-center mb-3">
                          <div className="pl-lg-5 ml-lg-5">
                            <h2 className="mb-4 custom-heading-line fox-font40">{node.titleToAppearInOtherPages}</h2>

                            <div className="mb-5 custom-content-line fox-font19"
                              dangerouslySetInnerHTML={{
                                __html: node.contentToAppearInOtherPages.childMarkdownRemark.html,
                              }}
                            />
                            <ScrollAnimation animateIn="fadeIn">
                              <div><Link to="/contact-us" className="read-more mr-4">Contact Us</Link> <ScrollAnimation animateIn="fadeInLeft" className="fade-inline"><i className="icon icon-red-arrow"></i></ScrollAnimation></div>
                            </ScrollAnimation>
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </section>
                )
              })}

              {contactForm === true &&
              <>
                {contactFormBanner != null &&
                  <section className="layout-contact">
                    <div className="container-fluid">
                      <Row>

                        <Col lg={6} md={6} className="px-0">
                          <BackgroundImage
                            Tag="section"
                            className="contact-bg-lft"
                            fluid={contactFormBackground.fluid}
                          >
                            <div className="px-5">
                              <h5 className="mb-5">Contact Us</h5>
                              <ContactForm radioSelect="rooms" />
                            </div>
                          </BackgroundImage>

                        </Col>
                        <Col lg={6} md={6} className="px-0">
                          <BackgroundImage
                            Tag="section"
                            className="contact-bg-rht"
                            fluid={contactFormBanner.fluid}
                          >
                          </BackgroundImage>
                        </Col>
                      </Row>
                    </div>
                  </section>
                }
                {contactFormBanner === null &&
                  <Contact />
                }
                </>
                }
              <Membership />

              <Footer />

            </>
          )
        })}
      </>
    )
  }
}

export default RoomsPage


export const pageQuery = graphql`
  query RoomsPage {
  allContentfulPages(filter: {id: {eq: "f03a0a85-c80c-58e1-a3af-7652a05e5e32"}}) {
    edges {
      node {
        bannerContent
        bannerLink
        bannerLinkText
        id
        bannerImage {
          fluid( quality: 100, maxWidth: 1500) {
            base64
            srcWebp
            src
            aspectRatio
            srcSetWebp
          }
        }
      }
    }
  }

  
  contentfulConfiguration {
    contactFormBackground {
      fluid(quality: 90) {
           ...GatsbyContentfulFluid_withWebp
      }
    }
  }



  allContentfulContentBlocks(filter: {id: {eq: "68e6bedd-cd4e-55e0-98a8-80ba69d395ff"}}) {
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


  allContentfulRooms(sort: {fields: sort}) {
    edges {
      node {
        roomName
        shortDescription {
          childMarkdownRemark {
            html
          }
        }
        thumbnail {
          fluid {
            base64
            srcWebp
            src
            srcSetWebp
          }
        }
        slug
      }
    }
  }


  allContentfulAccommodationRates(sort: {fields: id}) {
    edges {
      node {
        title
        membersHeading1
        membersHeading2
        nonMembersHeading2
        nonMembersHeading1
        membersContent11 {
          childMarkdownRemark {
            html
          }
        }
        membersContent12 {
          childMarkdownRemark {
            html
          }
        }
        membersContent21 {
          childMarkdownRemark {
            html
          }
        }
        membersContent22 {
          childMarkdownRemark {
            html
          }
        }
        nonMembersContent11 {
          childMarkdownRemark {
            html
          }
        }
        nonMembersContent12 {
          childMarkdownRemark {
            html
          }
        }
        nonMembersContent22 {
          childMarkdownRemark {
            html
          }
        }
        nonmembersContent21 {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }

    contentfulPages(id: {eq: "f03a0a85-c80c-58e1-a3af-7652a05e5e32"}) {
    seoMetaKeywords
    seoMetaTitle
    seometaDescription
        contactForm
    contactBannerRight {
      fluid(quality: 90, maxWidth: 1500) {
           ...GatsbyContentfulFluid_withWebp
      }
    }
    content {
      childMarkdownRemark {
        html
      }
    }
            contentBlocks {
        id
        linkTextToAppearInOtherPages
        titleToAppearInOtherPages
        shortDescriptionLink
        image {
          fluid(quality:100){
            base64
            srcWebp
            src
            srcSetWebp
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
