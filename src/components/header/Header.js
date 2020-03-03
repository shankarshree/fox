import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "gatsby";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import './assets/styles/_index.scss';

export class Header extends Component {
    render () {
        return (
          <>
            <section className={"header-bg " + this.props.headerBg}  style={{backgroundImage: `url(${this.props.headerImage})`,}}>
                <Container>
                    <Row className="d-flex justify-content-center">
                        <Col lg={11} className="mb-md-5 header-content">
                            <ScrollAnimation animateIn="fadeInUp" className="mb-5">
                                <h1>{this.props.headerContent}</h1>
                                <h2>{this.props.headerContent2}</h2>
                                <p>{this.props.contentSub}</p>
                            </ScrollAnimation>

                            <ScrollAnimation animateIn="fadeInUp" delay={300}>
                                <div className="">
                                    <Link to={this.props.buttonLink} className="btn header-btn">{this.props.buttonName}</Link>
                                </div>
                            </ScrollAnimation>
                        </Col>
                    </Row>
                </Container>
            </section>
          </>  
        );
    }
}

export default Header;