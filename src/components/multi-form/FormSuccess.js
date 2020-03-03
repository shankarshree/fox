import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './assets/styles/_index.scss';

const foxlogo = require('./assets/img/foxicon.svg');

export class FormSuccess extends React.Component {

    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        return (
            <>

                <section className="multiform success-form d-flex align-items-center">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className="d-flex justify-content-center">
                                    <div className="text-center">
                                        <img src={foxlogo} className="img-fluid foxlogo mb-5" alt="" />
                                        <h3 className="fox-font-success mb-5">Thank you, will be in touch with you shortly.</h3>
                                        <a href="/" class="fox-btn" title="Membership">BACK TO HOME</a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                </section>
            </>
        );
    }
}

export default FormSuccess;