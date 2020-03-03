import React from "react";
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import '../assets/styles/_index.scss';
import '../assets/styles/_custom.scss';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import $ from 'jquery';
import 'lightbox2/src/css/lightbox.css';
import Contact from '../components/contact';

import BackgroundImage from 'gatsby-background-image'
import ContactForm from '../components/contact-form/ContactForm';

import HeaderNavbar from '../components/header-navbar/HeaderNavbar';
import Header from '../components/header/Header';

import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import Membership from '../components/membership/Membership';
import Footer from '../components/footer/Footer';
const logo = require('../assets/img/logo1.svg');


class GalleryPage extends React.Component {

  componentDidMount() {
    $('.filter-item').slice(0, 6).show();
    $('#load-more').click(function (e) {
      e.preventDefault();
      $('.filter-item:hidden').slice(0, 6).fadeIn(300);
      if ($('.filter-item:hidden').length === 0) {
        $('#load-more').fadeOut(300);
      }
    });

    $('.filter-button').click(function () {
      var value = $(this).attr('data-filter');

      if (value === 'all') {
        $('.filter').fadeIn(300);
        $('#load-more').show();
        if ($('.filter-item:hidden').length === 0) {
          $('#load-more').hide();
        }
      }
      else {
        $('.filter').not('.' + value).fadeOut(300);
        $('.filter').filter('.' + value).fadeIn(300);
        $('#load-more').hide();
      }

      if ($('.filter-button').removeClass('active')) {
        $(this).removeClass('active');
      }
      $(this).addClass('active');
    });

    $(document).ready(function () {
      const Lightbox = require('lightbox2/src/js/lightbox');
      Lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
      })
      return (Lightbox);
    });

    $('.top').prependTo('.gallery-filter');

    // IE detect for gallery popup
    function GetIEVersion() {
      var sAgent = window.navigator.userAgent;
      var Idx = sAgent.indexOf("MSIE");

      // If IE, return version number.
      if (Idx > 0)
        return parseInt(sAgent.substring(Idx + 5, sAgent.indexOf(".", Idx)));

      // If IE 11 then look for Updated user agent string.
      else if (!!navigator.userAgent.match(/Trident\/7\./))
        return 11;

      else
        return 0; //It is not IE
    }

    if (GetIEVersion() > 0) {
      var style = document.createElement('style');
      style.innerHTML = `
              #lightbox { top: 100px !important }
            `;
      document.head.appendChild(style);
    } else { }
    //
  }

  render() {
    const gallery = get(this, 'props.data.allContentfulPages.edges')
    const PageContent = get(this, 'props.data.contentfulPages.content.childMarkdownRemark.html')

    const contactForm = get(this, 'props.data.contentfulPages.contactForm')
    const contactFormBanner = get(this, 'props.data.contentfulPages.contactBannerRight')
    const contactFormBackground = get(this, 'props.data.contentfulConfiguration.contactFormBackground')

    const allCategory = get(this, 'props.data.allContentfulGallery.distinct')
    const images = get(this, 'props.data.allContentfulGallery.edges')

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
          <meta property="og:title" content="Gallery" />
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
        {gallery.map(({ node }) => {
          return (
            <>
              <HeaderNavbar />

              <Header headerBg="" headerImage={node.bannerImage.fluid.src} headerContent={node.bannerContent} buttonName={node.bannerLinkText} buttonLink={node.bannerLink} />

              <Breadcrumb pageName="GALLERY" />

              <section className="layout-home common">
                <Container className="mb-5">
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

                <Container>
                  <Row>
                    <Col lg={12}>
                      <ul className="list-inline gallery-filter pl-lg-4 mb-5">
                        <li className="list-inline-item filter-button top active" data-filter="all">All</li>
                        {allCategory.map(function (distinct) {
                          return (
                            <>{distinct === "PUBLIC AREAS" &&

                              <li className="list-inline-item filter-button top" data-filter={`${distinct.toLowerCase().replace(/[^\w\s]/gi, '-').replace(/\s/g, '')}`}>{distinct.toLowerCase()}</li>
                            }
                              {distinct === "ROOMS" &&

                                <li className="list-inline-item filter-button top" data-filter={`${distinct.toLowerCase().replace(/[^\w\s]/gi, '-').replace(/\s/g, '')}`}>{distinct.toLowerCase()}</li>
                              }
                              {distinct != "PUBLIC AREAS" && distinct != "ROOMS" &&

                                <li className="list-inline-item filter-button" data-filter={`${distinct.toLowerCase().replace(/[^\w\s]/gi, '-').replace(/\s/g, '')}`}>{distinct.toLowerCase()}</li>
                              }
                            </>
                          )
                        }
                        )}

                      </ul>
                      <ul className="filter-container gallery-filter-items row">

                        {images.map(({ node }, i) => {
                          return (
                            <>
                              <div className={"col-lg-4 col-md-6 filter-item filter " + node.Category.toLowerCase().replace(/[^\w\s]/gi, '-').replace(/\s/g, '')}>
                                <a href={node.image.fluid.src} data-lightbox="roadtrip"><img className="img-fluid mb-4 w-100" src={node.image.fluid.src} alt={node.image.title} /></a>
                              </div>

                            </>
                          )
                        })}

                        <div className="col-lg-12 text-center mt-4">
                          <button id="load-more" className="gallery-loadmore">Load More</button>
                        </div>
                      </ul>
                    </Col>
                  </Row>
                </Container>

              </section>
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

export default GalleryPage

export const pageQuery = graphql`
  query GalleryPage {
  allContentfulPages(filter: {id: {eq: "8d4cc63f-5891-51b1-8431-e41dcc591e4e"}}) {
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

    contentfulPages(id: {eq: "8d4cc63f-5891-51b1-8431-e41dcc591e4e"}) {
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
  }


  allContentfulGallery {
    distinct(field: Category)
    edges {
      node {
        Category
        image {
        title
          fluid {
            src
          }
        }
      }
    }
  }


  }
`