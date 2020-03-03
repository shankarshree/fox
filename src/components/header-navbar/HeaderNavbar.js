import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "gatsby";
import { slide as Menu } from 'react-burger-menu';
import './assets/styles/_index.scss';
import { StaticQuery, graphql } from "gatsby"

const logo = require('./assets/img/logo1.svg');
const burgerMenu = require('./assets/img/menu.svg');

export default () => (

  <StaticQuery
    query={graphql`
      query HeaderNavQuery {


  contentfulConfiguration {
    headerMenus {
      pageName
      slug
    }
  }

      }
    `}


    render={data => (
      <>
        <header className="header mt-4">
          <Menu right noOverlay className="text-center" width={'100%'} customBurgerIcon={<img src={burgerMenu} alt="" />}>

            {data.contentfulConfiguration.headerMenus.map((headerMenus, key) => {
              return <Link key={key} to={`/${headerMenus.slug}`} className="nav-link">{headerMenus.pageName}</Link>
            })}

            <Link to="/contact-us" className="nav-link btn contact-btn w-50 m-auto">Contact Us</Link>
          </Menu>

          <Navbar expand="lg" className="header-nav">
            <Navbar.Brand>
              <Link to="/">
                <img src={logo} className="nav-logo img-fluid mb-0" alt="" />
              </Link>
            </Navbar.Brand>

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto m-left">
                {data.contentfulConfiguration.headerMenus.map((headerMenus, key) => {
                  return <Link key={key} to={`/${headerMenus.slug}`} className="nav-link">{headerMenus.pageName}</Link>
                })}
              </Nav>

              <Nav className="ml-auto">
                <Link to="/contact-us" className="nav-link btn contact-btn">Contact Us</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </header>
      </>
    )}
  />
)
