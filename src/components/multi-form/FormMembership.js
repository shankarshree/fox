import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "gatsby";
import './assets/styles/_index.scss';

export class FormMembership extends React.Component {

    confirm = (e) => {
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
                                    <li className="list-inline-item"><span>2</span> Work</li>
                                    <li className="list-inline-item active"><span>3</span> Membership</li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>

                    <Container>
                        <Row className="mb-5">
                            <Col lg={12}>
                                <p className="form-font">My Application is for the following membership</p>
                            </Col>
                        </Row>
                        
                        <Row>
                            <Col lg={4} className="mb-4">
                                <label className="check-card">Mayfair Individual
                                    <input type="checkbox" name="" />
                                    <span className="check-mark"></span>
                                </label>
                                <p className="fox-textsmall mb-2 ml-4 pl-2">Annual Subscription: £595</p>
                                <p className="fox-textline ml-4 pl-2">+ £200 Joining fee</p>
                            </Col>
                            <Col lg={4} className="mb-4">
                                <label className="check-card">Mayfair Joint membership (2 pax)
                                    <input type="checkbox" name="" />
                                    <span className="check-mark"></span>
                                </label>
                                <p className="fox-textsmall mb-2 ml-4 pl-2">Annual Subscription: £595 +£200*</p>
                            </Col>
                            <Col lg={4} className="mb-4">
                                <label className="check-card">Mayfair Overseas
                                    <input type="checkbox" name="" />
                                    <span className="check-mark"></span>
                                </label>
                                <p className="fox-textsmall mb-2 ml-4 pl-2">Annual Subscription: £395</p>
                                <p className="fox-textline ml-4 pl-2">+ £150 Joining fee</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={4} className="mb-4">
                                <label className="check-card">Country Individual
                                    <input type="checkbox" name="" />
                                    <span className="check-mark"></span>
                                </label>
                                <p className="fox-textsmall mb-2 ml-4 pl-2">Annual Subscription: £495</p>
                                <p className="fox-textline ml-4 pl-2">+ £200 Joining fee</p>
                            </Col>
                            <Col lg={4} className="mb-4">
                                <label className="check-card">Country Joint membership (2 pax)
                                    <input type="checkbox" name="" />
                                    <span className="check-mark"></span>
                                </label>
                                <p className="fox-textsmall mb-2 ml-4 pl-2">Annual Subscription: £495 +£200*</p>
                            </Col>
                            <Col lg={4} className="mb-4">
                                <label className="check-card">Corporate
                                    <input type="checkbox" name="" />
                                    <span className="check-mark"></span>
                                </label>
                                <p className="fox-textsmall mb-2 ml-4 pl-2">Annual Subscription: £1995</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={4} className="mb-5">
                                <label className="check-card">SME Membership (3 pax)
                                    <input type="checkbox" name="" />
                                    <span className="check-mark"></span>
                                </label>
                                <p className="fox-textsmall mb-2 ml-4 pl-2">Annual Subscription: £995</p>
                            </Col>
                            <Col lg={4} className="mb-5">
                                <label className="check-card">Young Fox (Under 30)
                                    <input type="checkbox" name="" />
                                    <span className="check-mark"></span>
                                </label>
                                <p className="fox-textsmall mb-2 ml-4 pl-2">Annual Subscription: £250</p>
                            </Col>
                            <Col lg={4} className="mb-5">
                                <label className="check-card">Monthly Membership
                                    <input type="checkbox" name="" />
                                    <span className="check-mark"></span>
                                </label>
                                <p className="fox-textsmall mb-2 ml-4 pl-2">Monthly Subscription: £95</p>
                            </Col>
                        </Row>

                        <Row className="mb-5">
                            <Col lg={12}>
                                <p className="form-mandatory">* On top of Individual Membership</p>
                            </Col>
                        </Row>

                        <Row className="mb-5">
                            <Col lg={6}>
                                <p className="mb-5 pb-3">Preferred method of payment to The Fox Club Mayfair</p>

                                <select className="form-control select">
                                    <option>Payment Method</option>
                                    <option>Standing Order</option>
                                    <option>Cheque</option>
                                    <option>Credit Card</option>
                                    <option>Cash</option>
                                </select>
                            </Col>
                        </Row>

                        <Row className="mb-4">
                            <Col lg={12} className="mb-5">
                                <p className="fox-textline">For Standing Order you will receive a mandate form and a yearly receipt.</p>
                            </Col>

                            <Col lg={12} className="mb-5">
                                <label className="check-card terms">I hereby apply for Membership of The Fox Club London. I will join for one year from this date and my subscription will automatically renew per year after this date. Termination allowed with one month’s notice after the first year. I agree to be bound by the rules of the Club and any by-laws made or to be made in accordance therewith and to pay such joining fee and subscription as the club rules should require. *
                                    <input type="checkbox" name="" />
                                    <span className="check-mark"></span>
                                </label>
                            </Col>

                            <Col lg={12} className="mb-5 pl-0">
                                <label className="check-card terms">Subscribe to our newsletter
                                    <input type="checkbox" name="" />
                                    <span className="check-mark"></span>
                                </label>
                            </Col>

                            <Col lg={12} className="mb-5">
                                <label className="check-card terms">Please confirm your consent to your data being used in accordance with our <Link to="/privacy-policy">privacy policy</Link> *
                                    <input type="checkbox" name="" />
                                    <span className="check-mark"></span>
                                </label>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={6}>
                                <button onClick={this.previous} className="fox-button mr-4 mb-md-0 mb-3">Previous</button>
                                <button onClick={this.confirm} className="fox-button">Submit Request</button>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        );
    }
}

export default FormMembership;