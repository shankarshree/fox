import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "gatsby";
import './assets/styles/_index.scss';

export class Breadcrumb extends React.Component {
    render () {
        return (
            <>
                <section className="header-breadcrumb">
                    <Container>
                        <Row className="d-flex justify-content-center">
                            <Col lg={10} className="px-lg-0">
                                <ul className="list-inline" itemscope itemtype="https://schema.org/BreadcrumbList">
                                    <li className="list-inline-item" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem"><Link to="/" className="breadcrumb-link" itemprop="item" >Home</Link> <i className="icon icon-arrow mx-2"></i></li>
                                    <li className="list-inline-item" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">{this.props.pageName}</li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        );
    }
}

export default Breadcrumb;