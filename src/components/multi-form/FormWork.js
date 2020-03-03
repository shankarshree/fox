import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './assets/styles/_index.scss';

export class FormWork extends React.Component {

    next = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    previous  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render () {
        return (
            <>
                <section className="multiform">
                    <Container className="mb-5">
                        <Row>
                            <Col lg={12}>
                                <ul className="list-inline list-pass">
                                    <li className="list-inline-item"><span>1</span> Personal</li>
                                    <li className="list-inline-item active"><span>2</span> Work</li>
                                    <li className="list-inline-item"><span>3</span> Membership</li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>

                    <form className="">
                        <Container>
                            <Row>
                                <Col lg={6}>
                                    <div className="mb-5">
                                        <input type="text" className="form-control" id="" placeholder="Business Name" />
                                    </div>

                                    <div className="mb-5">
                                        <input type="text" className="form-control" id="" placeholder="Address Line 2" />
                                    </div>

                                    <div className="mb-5">
                                        <input type="text" className="form-control" id="" placeholder="Postcode" />
                                    </div>

                                    <div className="mb-5">
                                        <input type="text" className="form-control" id="" placeholder="Telephone" />
                                    </div>

                                    <div className="mb-5">
                                        <textarea placeholder="How did you hear about us?" className="form-control" rows="6"></textarea>
                                    </div>

                                    <p className="mb-5">We care about your privacy here at The Fox Club London. Where would you prefer your email or post to be sent?</p>

                                    <div className="mb-5">
                                        <ul className="list-inline">
                                            <li className="list-inline-item mr-5">
                                                <label className="check-card">Business
                                                    <input type="checkbox" name="" />
                                                    <span className="check-mark"></span>
                                                </label>
                                            </li>
                                            <li className="list-inline-item">
                                                <label className="check-card">Home
                                                    <input type="checkbox" name="" />
                                                    <span className="check-mark"></span>
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                </Col>

                                <Col lg={6}>
                                    <div className="mb-5">
                                        <input type="text" className="form-control" id="" placeholder="Street Address" />
                                    </div>

                                    <div className="mb-5">
                                        <input type="text" className="form-control" id="" placeholder="City" />
                                    </div>

                                    <div className="mb-5">
                                        <input type="text" className="form-control" id="" placeholder="Country" />
                                    </div>

                                    <div className="mb-5">
                                        <input type="email" className="form-control" id="" placeholder="Email Address" />
                                    </div>

                                    <div className="mb-5">
                                        <textarea placeholder="Have you been nominated by a current member? (If so please give details)" className="form-control" rows="6"></textarea>
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={6}>
                                    <button onClick={this.previous} className="fox-button mr-4 mb-md-0 mb-3">Previous</button>
                                    <button onClick={this.next} className="fox-button">Next</button>
                                </Col>
                            </Row>
                        </Container>
                    </form>
                </section>
            </>
        );
    }
}

export default FormWork;